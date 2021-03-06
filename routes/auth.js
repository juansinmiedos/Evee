const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer')
const passport = require('passport');
const {showLogin, toLogin, showSignup, toSignup, toLogOut, confirmation} = require('../controllers/index');
const catchErrors = require('../middlewares/catchErrors')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isLoggedOut = require('../middlewares/isLoggedOut')
const checkRoles = require('../middlewares/checkRoles')
const isAuth = require('../middlewares/isAuth')

router.get("/signup", showSignup);
router.post("/signup", toSignup);

router.get('/confirm/:confirmationCode', confirmation)

router.get("/login", showLogin);
router.post("/login", toLogin);

router.get("/logout", toLogOut);

module.exports = router;