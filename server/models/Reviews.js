const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    contentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Content"
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    rating: {
        type: Number
    },
    review: {
        type: String
    },
    isHidden: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Reviews = mongoose.model("Reviews", ReviewSchema)
module.exports = Reviews;