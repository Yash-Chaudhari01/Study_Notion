const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    whatYouWillLearn: {
        type: String
    },
    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section"
        }
    ],
    ratingAndReview: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ratingAndReview"
        }
    ],
    price:{
        type:String,
        required:true
    },
    thubnail:{
        type:String
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    },
    studentEntrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }]
});

module.exports= mongoose.model("Course",courseSchema); 