const Admin = require("../Schema/AdminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// Create Admin (one time)
const createAdmin = async (req,res)=>{

    try{

        const {
            name,
            email,
            mobile,
            password
        } = req.body;


        const existAdmin = await Admin.findOne({
            email
        });


        if(existAdmin){
            return res.status(400).json({
                msg:"Admin already exists"
            });
        }


        const hashPassword = await bcrypt.hash(
            password,
            10
        );


        const admin = await Admin.create({

            name,
            email,
            mobile,
            password: hashPassword

        });


        res.status(201).json({
            msg:"Admin Created",
            admin
        });


    }catch(error){

        res.status(500).json({
            msg:error.message
        });

    }

};



// Admin Login

const adminLogin = async(req,res)=>{

    try{

        const {
            email,
            password
        } = req.body;


        const admin = await Admin.findOne({
            email
        });


        if(!admin){

            return res.status(404).json({
                msg:"Email not found"
            });

        }


        const matchPassword =
        await bcrypt.compare(
            password,
            admin.password
        );


        if(!matchPassword){

            return res.status(401).json({
                msg:"Invalid Password"
            });

        }


        const token = jwt.sign(
            {
                id:admin._id,
                email:admin.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );


        res.json({

            msg:"Login Successful",

            token,

            admin:{
                id:admin._id,
                name:admin.name,
                email:admin.email,
                mobile:admin.mobile
            }

        });


    }catch(error){

        res.status(500).json({
            msg:error.message
        });

    }

};

// Forgot Password

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        msg: "Email not found",
      });
    }

    // Generate Reset Token
    const resetToken = crypto.randomBytes(32).toString("hex");

    admin.resetToken = resetToken;
    admin.resetTokenExpire = Date.now() + 1000 * 60 * 15; // 15 minutes

    await admin.save();

    // Gmail Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Reset Link
    const resetLink = `http://localhost:5173/resetpassword/${resetToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: admin.email,
      subject: "Evergreen Landscape - Reset Password",

      html: `
      <div style="font-family:Arial;padding:20px">
        <h2>Reset Password</h2>

        <p>Hello <b>${admin.name}</b>,</p>

        <p>Click the button below to reset your password.</p>

        <a href="${resetLink}"
          style="
            background:#2E7D32;
            color:white;
            padding:12px 22px;
            text-decoration:none;
            border-radius:6px;
            display:inline-block;
          ">
          Reset Password
        </a>

        <p style="margin-top:20px">
          This link will expire in 15 minutes.
        </p>

        <p>If you didn't request this, please ignore this email.</p>
      </div>
      `,
    });

    res.json({
      msg: "Password reset link sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

// Reset Password

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const admin = await Admin.findOne({
      resetToken: token,
      resetTokenExpire: { $gt: Date.now() },
    });

    if (!admin) {
      return res.status(400).json({
        msg: "Invalid or Expired Reset Link",
      });
    }

    // Hash New Password
    const hashPassword = await bcrypt.hash(password, 10);

    admin.password = hashPassword;
    admin.resetToken = undefined;
    admin.resetTokenExpire = undefined;

    await admin.save();

    res.status(200).json({
      msg: "Password Reset Successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
module.exports={
    createAdmin,
    adminLogin,
     forgotPassword,
  resetPassword,
};