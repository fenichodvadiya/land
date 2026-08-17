const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  CreateCarousel,
  GetCarousel,
  UpdateCarousel,
  DeleteCarousel,
} = require("../Controller/CrouselControl");

// STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// FILE FILTER
const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

console.log("🔥 CAROUSEL ROUTE LOADED");

// CREATE
router.post(
  "/CreateCarousel",
  (req, res, next) => {
    console.log("🔥 ROUTER REQUEST RECEIVED");
    next();
  },
  upload.single("image"),
  (req, res, next) => {
    console.log("🔥 MULTER FINISHED");
    console.log("FILE:", req.file);
    console.log("BODY:", req.body);
    next();
  },
  CreateCarousel
);

// GET
router.get(
  "/GetCarousel",
  GetCarousel
);

// UPDATE
router.put(
  "/UpdateCarousel/:id",
  upload.single("image"),
  UpdateCarousel
);

// DELETE
router.delete(
  "/DeleteCarousel/:id",
  DeleteCarousel
);

module.exports = router;