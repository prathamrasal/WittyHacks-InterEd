const Course = require("../models/Course")
const User = require("../models/User")
const catchAsync = require("../utils/catchAsync")

exports.getCourses = catchAsync(async (req, res, next) => {
    const course = await Course.find().populate('contents').populate('reviews').populate('curatedBy').populate('studentsEnrolled');
    res.json({
        success: true,
        course
    })
})

exports.addCourse = catchAsync(async (req, res, next) => {
    const { courseName, contents, reviews, detail, curaratedBy, outcome, level } = req.body
    const newCourse = new Course({
        courseName,
        contents,
        reviews,
        detail,
        curaratedBy,
        outcome,
        level
    })
    const course = await Course.save();
    const user = await User.findById(req.query.id);
    user.createdCourses.push(course.id);
    await user.save();
    res.status(201).json({
        success: true,
        course
    })
})

exports.updateCourse = catchAsync(async (req, res, next) => {
    const { courseName, contents, reviews, curaratedBy } = req.body
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, data, { new: true }).populate('contents').populate('reviews').populate('curatedBy').populate('studentsEnrolled');
    res.json({
        success: true,
        updatedCourse
    })
})

exports.getCourseById = catchAsync(async (req, res, next) => {
    const course = await Course.findById(req.params.id).populate('contents').populate('reviews').populate('curatedBy').populate('studentsEnrolled');;
    if (!course) {
        return next(
            new AppError('Course Not Found')
        )
    }
    res.json({
        success: true,
        course
    })
})

exports.enrollCourse = catchAsync(async (req, res, next) => {
    const course = await Course.findById(req.params.id);
    const student = await User.findById(req.body.id);
    course.studentsEnrolled.push(req.body.id);
    student.courses.push(req.params.id)
    await student.save();
    await course.save();
    return res.json({
        success: true,
        student,
        course
    })
}) 