const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "photo") {
      cb(null, "uploads/photos");
    } else {
      cb(null, "uploads/audios");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post(
  "/generate",
  upload.fields([
    { name: "photo" },
    { name: "audio" }
  ]),
  async (req, res) => {

    const photo = req.files.photo[0];
    const audio = req.files.audio[0];

    const prompt = req.body.prompt;
    const ratio = req.body.ratio;

    res.json({
      success: true,
      photo: photo.filename,
      audio: audio.filename,
      prompt,
      ratio,
      video: "/outputs/demo.mp4"
    });

  }
);

module.exports = router;
