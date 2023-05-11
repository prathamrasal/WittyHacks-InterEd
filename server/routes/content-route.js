const router = require("express").Router()
const Content = require("../models/Content")
const contentController = require("../controller/contentController")

router
    .route("/")
    .get(contentController.getContent);

router
    .route("/")
    .post(contentController.addContent);

router
    .route("/recommendedContent")
    .get(contentController.recommendedContent);

router
    .route("/search")
    .get(contentController.SearchData);


router
    .route("/:id")
    .patch(contentController.updateContent);

router
    .route("/:id")
    .get(contentController.getContentById);

module.exports = router;