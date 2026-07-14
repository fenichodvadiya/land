const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
{
name:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

mobile:{
type:String,
required:true
},

password:{
type:String,
required:true
},

resetToken:{
type:String
},

resetTokenExpire:{
type:Date
}
},
{
timestamps:true
}
);

module.exports = mongoose.model("Admin", adminSchema);