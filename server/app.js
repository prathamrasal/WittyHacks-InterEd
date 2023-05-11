const express = require('express');
const dotenv = require('dotenv').config({ path: './config/.env' });
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
// const morgan = require('morgan');
const upload = require('./middlewares/multer')
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const path = require('path');
const hpp = require('hpp');
const passport = require('passport')
const session = require('express-session')
var cookieParser = require('cookie-parser')
const passportSetup = require('./config/passport-setup')
const cookieSession = require("cookie-session");
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const AppError = require('./utils/appError');

const authRoute = require('./routes/auth-route')
const contentRoute = require("./routes/content-route")
const courseRoute = require("./routes/course-route")
const reviewRoute = require("./routes/review-route")
const notesRoute = require("./routes/notes-route")

// view engine setup

// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))


app.use(express.json());
app.use(cookieParser())
app.use(
    cookieSession({
        name: "session",
        keys: ["cyberwolve"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

// set security http headers
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

//  CORS
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PATCH,DELETE",
        credentials: true,
    })
);

//  set limit request from same API in timePeroid from same ip
const limiter = rateLimit({
    max: 1000, //   max number of limits
    windowMs: 60 * 60 * 1000, // hour
    message: ' Too many req from this IP , please Try  again in an Hour ! ',
});

app.use('/api', limiter);

//  Body Parser  => reading data from body into req.body protect from scraping etc
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSql query injection
app.use(mongoSanitize()); //   filter out the dollar signs protect from  query injection attact

// Data sanitization against XSS
app.use(xss()); //    protect from molision code coming from html

// testing middleware
app.use((req, res, next) => {
    next();
});


// app.use(formData.parse());
// app.use(formidable())
// app.use(upload.single('image'))

// routes
app.use('/api/auth', authRoute)
app.use('/api/content', contentRoute)
app.use('/api/course', courseRoute)
app.use('/api/review', reviewRoute)
app.use('/api/notes', notesRoute)

app.get("/health", (req, res) => {
    res.send("App is working Fine");
})

// handling all (get,post,update,delete.....) unhandled routes
app.all('*', (req, res, next) => {
    next(
        new AppError(`Can't find ${req.originalUrl} on the server`, 404)
    );
});



// error handling middleware
app.use(globalErrorHandler);

module.exports = app;