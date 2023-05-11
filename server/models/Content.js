const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    thumbnail: {
        type: String,
        default: "https://searchengineland.com/wp-content/seloads/2015/11/content-marketing-idea-lightbulb-ss-1920.jpg"
    },
    url: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review"
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    SARating: {
        type: Number,
        default: 100
    }
}, {
    timestamps: true
})

const Content = mongoose.model("Content", ContentSchema);
module.exports = Content;