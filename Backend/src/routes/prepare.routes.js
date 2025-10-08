const express = require("express");
const prepareController = require("../controller/prepare.controller");
const multer = require("multer");

const router = express.Router();

// Save uploads in "uploads/" folder
const upload = multer({ dest: "uploads/" });

router.post(
  "/get-Prepare",
  upload.fields([{ name: "resume" }, { name: "jobdesc" }]),
  prepareController.getPrepare
);

module.exports = router;
