const User = require("../Schema/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* REGISTER */
exports.Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        msg: "All fields are required",
      });
    }

    const existUser = await User.findOne({
      email,
    });

    if (existUser) {
      return res.status(400).json({
        msg: "Email already exists",
      });
    }

    const hashPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      msg: "Registration Successful",
      user,
    });

  } catch (error) {
    console.log("REGISTER ERROR =>", error);

    res.status(500).json({
      msg: "Server Error",
    });
  }
};

/* LOGIN */
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Email and Password are required",
      });
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        msg: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        msg: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      msg: "Login Successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("LOGIN ERROR =>", error);

    res.status(500).json({
      msg: "Server Error",
      error: error.message,
    });
  }
};