const express = require('express');
const route = express.Router();
console.log("RouteSection");
const {sendOtp}= require('../controllers/Authentication');

route.post('/otp',sendOtp);


module.exports= route;