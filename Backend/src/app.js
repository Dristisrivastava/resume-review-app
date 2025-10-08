const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const prepareroutes=require('./routes/prepare.routes');
const app = express()
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.use('/ai',aiRoutes); //any request with /ai will be send to airoutes
app.use('/prepare',prepareroutes); //any request with /prepare will be send to prepareroutes
module.exports=app;