const catchAsync = require('../utils/catchAsync');
const Content = require("../models/Content")
const AppError = require("../utils/appError");
const User = require('../models/User');
exports.getContent = catchAsync(async (req, res, next) => {
    const queryOptions = {};
    if (query.type) queryOptions.type = query.type;
    const content = await Content.find(queryOptions).populate('creator').populate('reviews');
    res.json({
        success: true,
        data: content
    })
})

exports.addContent = catchAsync(async (req, res, next) => {
    const { name, type, url, reviews, creator, category, thumbnail, detail } = req.body;
    const newContent = new Content({
        name,
        type,
        url,
        category,
        thumbnail,
        detail,
        reviews,
        creator
    })
    const content = await newContent.save();
    res.status(201).json({
        success: true,
        content
    })
})

exports.updateContent = catchAsync(async (req, res, next) => {
    const { name, type, url, reviews, creator } = req.body;
    data = { name, type, url, reviews, creator }
    const content = await Content.findByIdAndUpdate(req.params.id, data, { new: true }).populate('creator').populate('reviews');
    if (!content) {
        return next(
            new AppError('Content Not Found')
        )
    }
    res.status(201).json({
        success: true,
        content
    })
})

exports.getContentById = catchAsync(async (req, res, next) => {
    const content = await Content.findById(req.params.id).populate('creator').populate('reviews')
    res.json({
        success: true,
        content
    })
})

exports.SearchData = catchAsync(async (req, res, next) => {
    let content = await Content.find({}).populate('creator').populate('reviews');
    let { key } = req.query;
    let tags = content.map(r => JSON.stringify(r));
    let sortedList = cosine.sortMatch(key, tags);
    sortedList = sortedList.reverse();
    let maxRating = 0;
    for (let i = 0; i < sortedList.length; ++i) {
        if (sortedList[i].rating > maxRating) maxRating = sortedList[i].rating;
    }
    let accuracy = maxRating - 0.2;
    let finalOptions = sortedList.filter((r) => r.rating >= accuracy);
    finalOptions = finalOptions.map(m => (JSON.parse(m.member)));
    return res.json({
        success: true,
        content: finalOptions
    })
})

exports.recommendedContent = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.query.id);
    const content = await Content.find();
    let key = user.studyPreferences + user.interestedTopics;
    let tags = content.map(r => JSON.stringify(r));
    let sortedList = cosine.sortMatch(key, tags);
    sortedList = sortedList.reverse();
    let maxRating = 0;
    for (let i = 0; i < sortedList.length; ++i) {
        if (sortedList[i].rating > maxRating) maxRating = sortedList[i].rating;
    }
    let accuracy = maxRating - 0.2;
    let finalOptions = sortedList.filter((r) => r.rating >= accuracy);
    finalOptions = finalOptions.map(m => (JSON.parse(m.member)));
    return res.json({
        success: true,
        content: finalOptions
    })
})