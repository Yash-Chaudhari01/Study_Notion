const Otp = require('../models/Otp');
const User =require('../models/User');
const otpGenrator = require('otp');
console.log("Hello");
exports.sendOtp =async (req,res)=>{
    try{
        console.log("test0");
       const {email} = req.body;
      const user = await User.find({email});
      if(user){
        return res.json({
            success:false,
            Message:"User Already Exist"
        })
      }
  console.log("Test1");
      const secret = otpGenrator({ digits: 6, secretLength: 20 });

       const payload ={
        email:email,
        otp:secret
       }

       const finalScreate = await Otp.create(payload);
       return res.json({
              success:true,
              Message :"otp Send ",
              finalScreate
       })

    }catch(err){
        return res.json({
            success:true,
            Message:err.Message
        })
    }
}