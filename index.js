const express = require('express');
const app = express();
const {DatbaseConnection}= require('./config/DatbaseConnection');
require("dotenv").config();


DatbaseConnection();
app.listen(process.env.PORT,()=>{
    console.log(`Server Started At Port NO ${process.env.PORT}`);
})