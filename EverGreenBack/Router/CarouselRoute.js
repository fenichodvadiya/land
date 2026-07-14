    const express=require('express')
    const router=express.Router()
    const multer=require('multer')
    const path=require('path')
    const {CreateCarousel,GetCarousel,UpdateCarousel,DeleteCarousel}=require('../Controller/CrouselControl')
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
    router.post('/CreateCarousel',upload.single('image'),CreateCarousel)
    router.get('/GetCarousel',GetCarousel)
    router.put('/UpdateCarousel/:id', upload.single('image'), UpdateCarousel);
    router.delete('/DeleteCarousel/:id',DeleteCarousel)
    module.exports=router