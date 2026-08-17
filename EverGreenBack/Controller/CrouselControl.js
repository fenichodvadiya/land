const Carousel = require("../Schema/CarouselModel");

// CREATE
const CreateCarousel = async (req, res) => {
  try {
    console.log("🔥 CONTROLLER CALLED");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({
        isSuccess: false,
        msg: "Image is required",
      });
    }

    const carousel = new Carousel({
      name: req.body.name,
      image: req.file.filename,
    });

    await carousel.save();

    console.log("✅ CAROUSEL SAVED:", carousel);

    res.status(201).json({
      isSuccess: true,
      msg: "Photo added successfully",
      data: carousel,
    });

  } catch (err) {
    console.log("❌ CREATE ERROR:", err);

    res.status(500).json({
      isSuccess: false,
      msg: err.message,
    });
  }
};


// GET
const GetCarousel = async (req, res) => {
  try {
    const data = await Carousel.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      isSuccess: true,
      msg: data,
    });

  } catch (err) {
    console.log("❌ GET ERROR:", err);

    res.status(500).json({
      isSuccess: false,
      msg: err.message,
    });
  }
};


// UPDATE
const UpdateCarousel = async (req, res) => {
  try {
    const id = req.params.id;

    const updateData = {
      name: req.body.name,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const data =
      await Carousel.findByIdAndUpdate(
        id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!data) {
      return res.status(404).json({
        isSuccess: false,
        msg: "Carousel not found",
      });
    }

    res.status(200).json({
      isSuccess: true,
      msg: "Carousel updated successfully",
      data,
    });

  } catch (err) {
    console.log("❌ UPDATE ERROR:", err);

    res.status(500).json({
      isSuccess: false,
      msg: err.message,
    });
  }
};


// DELETE
const DeleteCarousel = async (req, res) => {
  try {
    const id = req.params.id;

    const data =
      await Carousel.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).json({
        isSuccess: false,
        msg: "Carousel not found",
      });
    }

    res.status(200).json({
      isSuccess: true,
      msg: "Carousel deleted successfully",
    });

  } catch (err) {
    console.log("❌ DELETE ERROR:", err);

    res.status(500).json({
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