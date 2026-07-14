const express=require('express')
const router=express.Router()
const multer=require('multer')
const path=require('path')
const {CreateGallary,GetGallery,UpdateGallery,DeleteGallery}=require('../Controller/GallaryController')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const fileFilter=((req,file,cb)=>{
    const allowedTypes=/jpeg|jpg|png/
    const extname=allowedTypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    const mimetype=allowedTypes.test(file.mimetype);
    if(extname && mimetype){
        cb(null,true)
    }
    else{
        cb(new Error("only jpeg,jpg,png file are allowed"))
    }
})
const upload=multer({storage,fileFilter})
router.post('/Gallery',upload.single('image'),CreateGallary)
router.get('/getGallery',GetGallery)
router.put('/UpdateGallery/:id', upload.single('image'), UpdateGallery);
router.delete('/DeleteGallery/:id',DeleteGallery)
module.exports=router