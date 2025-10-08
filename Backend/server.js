require('dotenv').config();
const app= require('./src/app');
const cors = require("cors");
app.use(cors({ origin: "*" }));

app.listen(3000,()=>{ 
    console.log("server is running on http://localhost:3000");
})//server is running on port 3000