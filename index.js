const express = require('express');
const app = express();
const {DatbaseConnection}= require('./config/DatbaseConnection');
require("dotenv").config();


DatbaseConnection();

const route= require('./routes/test');
//app.use('/api/v1',route)
app.use(express.json());
app.listen(process.env.PORT,()=>{
    console.log(`Server Started At Port NO ${process.env.PORT}`);
})