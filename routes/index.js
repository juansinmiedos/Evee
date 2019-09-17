const express = require('express');
const router  = express.Router();
const {showProfile} = require('../controllers/index');
const catchErrors = require('../middlewares/catchErrors')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isLoggedOut = require('../middlewares/isLoggedOut')
const checkRoles = require('../middlewares/checkRoles')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/profile", isLoggedIn('/login'), catchErrors(showProfile))

module.exports = router;
