const Carousel = require("../Schema/CarouselModel");

// CREATE CAROUSEL
const CreateCarousel = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({
        isSuccess: false,
        msg: "No file uploaded",
      });
    }

    const carousel = new Carousel({
      name: req.body.name,
      image: req.file.path, // Cloudinary URL
    });

    await carousel.save();

    res.json({
      isSuccess: true,
      msg: "Uploaded Successfully",
      data: carousel,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      isSuccess: false,
      msg: err.message,
    });
  }
};


// GET ALL CAROUSEL
const GetCarousel = async (req, res) => {
  try {
    const data = await Carousel.find();

    res.send({
      isSuccess: true,
      msg: data,
    });

  } catch (err) {
    res.status(500).send({
      isSuccess: false,
      msg: err.message,
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
      updateData.image = req.file.path; // Cloudinary URL
    }

    const data = await Carousel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!data) {
      return res.send({
        isSuccess: false,
        msg: "Carousel not found",
      });
    }

    res.send({
      isSuccess: true,
      msg: "Updated successfully",
      data,
    });

  } catch (err) {
    res.status(500).send({
      isSuccess: false,
      msg: err.message,
    });
  }
};


// DELETE CAROUSEL
const DeleteCarousel = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await Carousel.findByIdAndDelete(id);

    if (!data) {
      return res.send({
        isSuccess: false,
        msg: "Carousel not found",
      });
    }

    res.send({
      isSuccess: true,
      msg: "Carousel deleted successfully",
    });

  } catch (err) {
    res.status(500).send({
      isSuccess: false,
      msg: err.message,
    });
  }
};


module.exports = {
  CreateCarousel,
  GetCarousel,
  UpdateCarousel,
  DeleteCarousel,
};