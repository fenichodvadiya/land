const mongoose=require('mongoose')
const Advertisement=mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   image:{
    type:String,
    required:true
   }
})
module.exports=mongoose.model('Advertisement',Advertisement)