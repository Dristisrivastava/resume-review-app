const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai.routes");
const prepareRoutes = require("./routes/prepare.routes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  credentials: true,               // allow cookies / credentials
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/healthz", (req, res) => res.status(200).send("OK"));

// Routes
app.use("/ai", aiRoutes);
app.use("/prepare", prepareRoutes);

module.exports = app;
