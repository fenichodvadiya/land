const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../Config/cloudinary");

const {
  CreateCarousel,
  GetCarousel,
  UpdateCarousel,
  DeleteCarousel,
} = require("../Controller/CrouselControl");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "evergreen/carousel",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });

router.post(
  "/CreateCarousel",
  upload.single("image"),
  CreateCarousel
);

router.get(
  "/GetCarousel",
  GetCarousel
);

router.put(
  "/UpdateCarousel/:id",
  upload.single("image"),
  UpdateCarousel
);

router.delete(
  "/DeleteCarousel/:id",
  DeleteCarousel
);

module.exports = router;