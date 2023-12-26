const mongoose = require('mongoose');
require("dotenv").config();

exports.DatbaseConnection=()=>{
    mongoose.connect(process.env.MOGODBURL).then(()=>{
        console.log("DB Connected");
    })
}