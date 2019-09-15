const express = require("express");
const router = express.Router();
const {showLogin, toLogin, showSignup, toSignup, toLogOut} = require('../controllers/index');

router.get("/signup", showSignup);
router.post("/signup", toSignup);

router.get("/login", showLogin);
router.post("/login", toLogin);

router.get("/logout", toLogOut);

module.exports = router;
