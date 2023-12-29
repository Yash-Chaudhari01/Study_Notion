const mongoose = require('mongoose');
const mailSender = require('../utils/Mail');

const OtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60
    }
});
async function verifyEmail(email,otp){
    try{
      const mailResponse = await mailSender(email,"verify",otp)
    
    }catch(err){
console.log("err.message");
    }
}
OtpSchema.pre("save",async function(next){
    await verifyEmail(this.email,this.otp);
    next();
})


module.exports  = mongoose.model("Otp",OtpSchema);