const catchAsync = require("../utils/catchAsync")
const Notes = require("../models/Notes")

exports.getNotesByCourseId = catchAsync(async (req, res, next) => {
    const notes = await Notes.find({ userId: req.params.id, courseId: req.query.courseId })
    res.json({
        success: true,
        notes
    })
})

exports.getNotesByContentId = catchAsync(async (req, res, next) => {
    const notes = await Notes.find({ userId: req.params.id, contentId: req.query.contentId })
    res.json({
        success: true,
        notes
    })
})

exports.addNotes = catchAsync(async (req, res, next) => {
    const { userId, contentId, courseId, note } = req.body;
    const newNote = new Notes({
        userId, contentId, courseId, note
    })
    const addedNote = newNote.save();
    res.json({
        success: true,
        addedNote
    })
})

exports.updateNotes = catchAsync(async (req, res, next) => {
    const note = await Notes.findById(req.params.id);
    note.note = req.body.note;
    const updatedNotes = await note.save();
    return res.json({
        success: true,
        updatedNotes
    })
})
