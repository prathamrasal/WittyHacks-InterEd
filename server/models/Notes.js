const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    contentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Content"
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    note: {
        type: String
    }
}, {
    timestamps: true
})

const Notes = mongoose.model("Notes", notesSchema);