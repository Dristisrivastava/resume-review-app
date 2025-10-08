const express = require("express");
const aiController = require("../controller/ai.controller");
const multer = require("multer");

const router = express.Router();

// Save uploads in "uploads/" folder
const upload = multer({ storage: multer.memoryStorage() });


router.post(
  "/get-review",
  upload.fields([{ name: "resume" }, { name: "jobdesc" }]),
  aiController.getReview
);

module.exports = router;
