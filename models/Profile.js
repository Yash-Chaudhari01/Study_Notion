const mongoose = require('mongoose');

const ProfileSchema= mongoose.Schema({
    gender:{
        type:String
    },
    DOB:{
      type:String  
    },
    about:{
        type:String,
        trim:true    
    },
    contactno:{
        type:Number,
        trim:true
    }
})

module.exports= mongoose.model("Profile",ProfileSchema);