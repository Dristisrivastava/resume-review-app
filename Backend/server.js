const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Your routes
// e.g., app.use("/ai", require("./routes/ai.routes"));

const PORT = process.env.PORT || 3000; // <- use Render's PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});