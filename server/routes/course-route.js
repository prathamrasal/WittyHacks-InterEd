const router = require("express").Router()
const Course = require("../models/Course")
const courseController = require("../controller/courseController")

router
    .route("/")
    .get(courseController.getCourses)

router
    .route("/")
    .post(courseController.addCourse)

router 
    .route("/enroll/:id")
    .post(courseController.enrollCourse)

router
    .route("/:id")
    .patch(courseController.updateCourse)

router
    .route("/:id")
    .get(courseController.getCourseById)

module.exports = router