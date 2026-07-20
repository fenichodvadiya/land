const Carousel = require("../Schema/CarouselModel");


// CREATE CAROUSEL
const CreateCarousel = async (req, res) => {
  try {

    const imageName = req.file ? req.file.filename : null;

    const carousel = new Carousel({
      name: req.body.name,
      image: imageName,
    });

    const data = await carousel.save();

    res.send({
      isSuccess: true,
      msg: "Photo added successfully",
      data
    });

  } catch (err) {

    res.status(500).send({
      isSuccess: false,
      msg: err.message
    });

  }
};


// GET ALL CAROUSEL
const GetCarousel = async (req, res) => {
  try {

    const data = await Carousel.find();

    res.send({
      isSuccess: true,
      msg: data
    });

  } catch (err) {

    res.status(500).send({
      isSuccess: false,
      msg: err.message
    });

  }
};


// UPDATE CAROUSEL
const UpdateCarousel = async (req, res) => {

  try {

    const id = req.params.id;

    const updateData = {};

    if (req.body.name) {
      updateData.name = req.body.name;
    }

    if (req.file) {
      updateData.image = req.file.filename;
    }


    const data = await Carousel.findByIdAndUpdate(
      id,
      updateData,
      {
        new:true,
        runValidators:true
      }
    );


    if(!data){
      return res.send({
        isSuccess:false,
        msg:"Carousel not found"
      });
    }


    res.send({
      isSuccess:true,
      msg:"Updated successfully",
      data
    });


  } catch(err){

    res.status(500).send({
      isSuccess:false,
      msg:err.message
    });

  }

};


// DELETE CAROUSEL
const DeleteCarousel = async (req,res)=>{

  try{

    const id = req.params.id;

    const data = await Carousel.findByIdAndDelete(id);


    if(!data){

      return res.send({
        isSuccess:false,
        msg:"Carousel not found"
      });

    }


    res.send({
      isSuccess:true,
      msg:"Carousel deleted successfully"
    });


  }catch(err){

    res.status(500).send({
      isSuccess:false,
      msg:err.message
    });

  }

};



module.exports = {
  CreateCarousel,
  GetCarousel,
  UpdateCarousel,
  DeleteCarousel
};