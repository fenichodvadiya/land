const Advertisement=require('../Schema/AdvertisementModel')
const CreateAdver=((req,res)=>{
    const imageName = req.file && req.file.filename;

 let Adver=new Advertisement({
    name:req.body.name,
    image:imageName
 })
 Adver.save()
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
const GetAdver=((req,res)=>{
    Advertisement.find()
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
const UpdateAdver = (req, res) => {
    const id = req.params.id;

    const updateData = {};

    if (req.body?.name) {
        updateData.name = req.body.name;
    }

    if (req.file?.filename) {
        updateData.image = req.file.filename;
    }

    Advertisement.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    })
        .then((data) => {
            if (!data) {
                return res.send({
                    isSuccess: false,
                    msg: "Advertisement not found"
                });
            }

            res.send({
                isSuccess: true,
                msg: "Advertisement updated successfully",
                data
            });
        })
        .catch((err) => {
            res.send({
                isSuccess: false,
                msg: err.message
            });
        });
};
const DeleteAdver = (req, res) => {
    const id = req.params.id;

    Advertisement.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.send({
                    isSuccess: false,
                    msg: "Advertisement not found"
                });
            }

            res.send({
                isSuccess: true,
                msg: "Advertisement deleted successfully"
            });
        })
        .catch((err) => {
            res.send({
                isSuccess: false,
                msg: err.message
            });
        });
};
module.exports={CreateAdver,GetAdver,UpdateAdver,DeleteAdver}