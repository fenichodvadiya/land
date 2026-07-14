const express=require('express')
const router=express.Router()
const multer=require('multer')
const path=require('path')
const {CreateAdver,GetAdver,UpdateAdver,DeleteAdver}=require('../Controller/AdvertisementControl')
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
router.post('/CreateAdver',upload.single('image'),CreateAdver)
router.get('/GetAdver',GetAdver)
router.put('/UpdateAdver/:id', upload.single('image'), UpdateAdver);

router.delete('/DeleteAdver/:id', DeleteAdver);
module.exports=router