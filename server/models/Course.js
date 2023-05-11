const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    thumbnail: {
        type: String,
        default: "https://searchengineland.com/wp-content/seloads/2015/11/content-marketing-idea-lightbulb-ss-1920.jpg"
    },
    contents: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Content"
    },
    category: {
        type: String
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review"
    },
    curatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    level: {
        type: String
    },
    outcome: {
        type: String
    },
    SARating: {
        type: Number,
        default: 100
    },
    studentsEnrolled: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }
}, {
    timestamps: true
})

const Course = mongoose.model("Course", courseSchema);
module.exports = Course