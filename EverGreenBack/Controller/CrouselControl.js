const Carousel=require('../Schema/CarouselModel')
const CreateCarousel=((req,res)=>{
    const imageName = req.file && req.file.filename;

 let Carousels=new Carousel({
    name:req.body.name,
    image:imageName,
 })
 Carousels.save()
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
const GetCarousel=((req,res)=>{
    Carousel.find()
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
const UpdateCarousel = (req, res) => {
    const id = req.params.id;
console.log("PARAMS:", req.params);
    console.log("ID:", req.params.id);
    console.log("RAW ID:", req.params.id);
    const updateData = {};

    // FormData text field
    if (req.body?.name) {
        updateData.name = req.body.name;
    }

    // FormData file field
    if (req.file?.filename) {
        updateData.image = req.file.filename;
    }

    Carousel.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    })
        .then((data) => {
            if (!data) {
                return res.send({
                    isSuccess: false,
                    msg: "Not found"
                });
            }

            res.send({
                isSuccess: true,
                msg: "Updated successfully",
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
const DeleteCarousel = (req, res) => {
    const id = req.params.id;

    Carousel.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.send({
                    isSuccess: false,
                    msg: "Carousel not found"
                });
            }

            res.send({
                isSuccess: true,
                msg: "Carousel deleted successfully"
            });
        })
        .catch((err) => {
            res.send({
                isSuccess: false,
                msg: err.message
            });
        });
};
module.exports={CreateCarousel,GetCarousel,UpdateCarousel,DeleteCarousel}