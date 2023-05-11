const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    password: {
        type: String
    },
    studyPreferences: {
        type: String
    },
    interestedTopics: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String,
        enum: ['operator', 'customer', 'admin'],
        default: 'customer'
    },
    courses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Course",
        default: []
    },
    createdCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Course",
        default: []
    },
    resetToken: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);

module.exports = User;