const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors()); // allow all origins or restrict to your Vercel frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint (Render uses this)
app.get("/healthz", (req, res) => res.status(200).send("OK"));

// Routes
app.use("/ai", require("./src/routes/ai.routes"));         // resume analysis
app.use("/prepare", require("./src/routes/prepare.routes")); // interview preparation

// Use dynamic port provided by Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
