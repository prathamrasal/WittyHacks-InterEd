const Review = require("../models/Reviews")
const catchAsync = require("../utils/catchAsync")
const axios = require("axios")
const Content = require("../models/Content")
const Course = require("../models/Course")

exports.getReviewsByCourseId = catchAsync(async (req, res, next) => {
    const reviews = await Course.find({ courseId: req.params.id });
    return res.json({
        success: true,
        reviews
    })
})

exports.getReviewsByContentId = catchAsync(async (req, res, next) => {
    const reviews = await Course.find({ contentId: req.params.id });
    return res.json({
        success: true,
        reviews
    })
})

exports.addReview = catchAsync(async (req, res, next) => {
    const { userId, contentId, courseId, rating, review } = req.body;
    const newReview = new Review({
        userId,
        contentId,
        courseId,
        rating,
        review
    })
    const addedReview = await newReview.save();
    const { data } = await axios.post("http://www.localhost:5001/sentiments", { feedback: review })
    if (contentId) {
        const content = await Content.findById(contentId);
        content.SARating = (content.SARating + data.score) / 2;
        await content.save();
    }
    res.json({
        success: true,
        review: addedReview
    })
})
