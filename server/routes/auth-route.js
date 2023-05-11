const router = require('express').Router()
const passport = require('passport')
const checkAuth = require('../middlewares/checkAuth');
const userController = require('../controller/userController');
const restrictTo = require('../middlewares/restrictTo');
const upload = require('../middlewares/multer')
const createToken = require('../utils/createToken')

router
    .route("/login")
    .post(userController.loginUser)

router
    .route("/createUser")
    .post(userController.createUser)

    
router
    .route("/updateUser/:id")
    .patch(checkAuth, upload.single('image'), userController.updateUser)

router
    .route("/removeUser/:id")
    .delete(checkAuth, restrictTo('admin'), userController.removeUser)

router
    .route("/getUser")
    .get(checkAuth, userController.getUser)


router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000");
});

module.exports = router