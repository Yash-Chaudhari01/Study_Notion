const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    }, 
    lastname:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
        required:true
    },
    additionDetail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true,

    },
    course:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    image:{
        type:String,
        required:true
    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"
        }
    ]


});

module.exports = mongoose.model('User',UserSchema);