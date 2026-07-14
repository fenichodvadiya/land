const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://feni:admin123@cluster0.w47mg4d.mongodb.net/"
  )
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err);
  });