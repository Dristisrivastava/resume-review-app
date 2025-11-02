const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai.routes");
const prepareRoutes = require("./routes/prepare.routes");

const app = express();

// ✅ Update your CORS setup
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://resume-review-app.vercel.app", // your Vercel frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl) or in allowed list
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/healthz", (req, res) => res.status(200).send("OK"));

// Routes
app.use("/ai", aiRoutes);
app.use("/prepare", prepareRoutes);

module.exports = app;
