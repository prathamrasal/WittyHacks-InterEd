const router = require("express").Router()
const Notes = require("../models/Notes")
const notesController = require("../controller/notesController")

router
    .route("/content/:id")
    .get(notesController.getNotesByContentId)

router
    .route("/course/:id")
    .get(notesController.getNotesByCourseId)

router
    .route("/")
    .post(notesController.addNotes)

router
    .route("/:id")
    .patch(notesController.updateNotes)
    
module.exports = router;