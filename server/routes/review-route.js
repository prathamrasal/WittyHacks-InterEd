const router = require("express").Router()
const reviewController = require("../controller/reviewController")
const Review = require("../models/Reviews")

router
    .route("/course/:id")
    .get(reviewController.getReviewsByCourseId)

router
    .route("/content/:id")
    .get(reviewController.getReviewsByContentId)

router
    .route("/")
    .post(reviewController.addReview)

module.exports = router