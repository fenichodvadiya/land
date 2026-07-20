const express=require('express')
const app=express()
require('dotenv').config()
require('./DbConnect')
app.use(express.json())
const cors=require('cors')
const path=require('path')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
const GallaryRoute=require('./Router/GallaryRoute')
const CarouselRoute=require('./Router/CarouselRoute')
const AdvertisementRoute=require('./Router/AdvertisementRoute')
const ContactRoute=require('./Router/ContactRouter')
const UserRoute=require('./Router/UserRoute')
const AdminRoute = require("./Router/AdminRoute");
app.use('/User',UserRoute)
app.use('/Contact',ContactRoute)
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/EverGallery',GallaryRoute)
app.use('/Carousel',CarouselRoute)
app.use('/Advertisement',AdvertisementRoute)
app.use("/admin", AdminRoute);
console.log("JWT =>", process.env.JWT_SECRET);
app.get('/',(req,res)=>{
    res.send("server start")
})
const fs = require("fs");

app.get("/check-uploads", (req, res) => {
  const uploadPath = path.join(__dirname, "uploads");

  res.json({
    exists: fs.existsSync(uploadPath),
    files: fs.existsSync(uploadPath)
      ? fs.readdirSync(uploadPath)
      : [],
  });
});
app.listen(process.env.PORT,()=>{
    console.log("port started on",process.env.PORT)
})