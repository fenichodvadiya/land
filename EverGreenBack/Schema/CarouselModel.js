const mongoose=require('mongoose')
const Carousel=mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   image:{
    type:String,
    required:true
   }
})
module.exports=mongoose.model('Carousel',Carousel)