const Gallary=require('../Schema/GellaryModel')
const CreateGallary=((req,res)=>{
    const imageName = req.file && req.file.filename;

 let addGallery=new Gallary({
    name:req.body.name,
    image:imageName
 })
 addGallery.save()
 .then((data)=>{
    res.send({
        isSucess:true,
        msg:"photo add sucessfully"
    })
 })
 .catch((err)=>{
    res.send({
        msg:err
    })
 })
})
const GetGallery=((req,res)=>{
    Gallary.find()
    .then((data)=>{
        res.send({
            msg:data
        })
    })
    .catch((err)=>{
        res.send({
            msg:err
        })
    })
})
    const UpdateGallery = (req, res) => {
   const id = req.params.id;
    const updateData = {}
      if (req.body.name) updateData.name = req.body.name;
    if (req.file && req.file.filename) updateData.image = req.file.filename;

    Gallary.findByIdAndUpdate(id, updateData, { new: true })
        .then((data) => {
            res.send({
                isSuccess: true,
                msg: "Gallery updated successfully",
                data: data
            });
        })
        .catch((err) => {
            res.send({
                isSuccess: false,
                msg: err
            });
        });

};
const DeleteGallery = (req, res) => {
    const id = req.params.id;

    Gallary.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.send({
                    isSuccess: false,
                    msg: "Gallery not found"
                });
            }

            res.send({
                isSuccess: true,
                msg: "Gallery deleted successfully"
            });
        })
        .catch((err) => {
            res.send({
                isSuccess: false,
                msg: err.message
            });
        });
};
module.exports={CreateGallary,GetGallery,UpdateGallery,DeleteGallery}