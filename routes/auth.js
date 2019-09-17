const express = require("express");
const router = express.Router();
const passport = require('passport');
const {showLogin, toLogin, showSignup, toSignup, toLogOut} = require('../controllers/index');
const catchErrors = require('../middlewares/catchErrors')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isLoggedOut = require('../middlewares/isLoggedOut')
const checkRoles = require('../middlewares/checkRoles')

router.get("/signup", showSignup);
router.post("/signup", toSignup);

router.get("/login", showLogin);
router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile", 
  failureRedirect: "/login", 
  failureFlash: true, 
  passReqToCallback: true
}) , catchErrors(toLogin));

router.get("/logout", toLogOut);

module.exports = router;

// passport.authenticate("local", {successRedirect: "/", failureRedirect: "/auth/login", failureFlash: true, passReqToCallback: true})