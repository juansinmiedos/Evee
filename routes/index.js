const express = require('express')
const router = express.Router()
const { showProfile, showHome } = require('../controllers/index')
const catchErrors = require('../middlewares/catchErrors')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isLoggedOut = require('../middlewares/isLoggedOut')
const checkRoles = require('../middlewares/checkRoles')
const isAuth = require('../middlewares/isAuth')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/profile', isAuth, isLoggedIn('/login'), catchErrors(showProfile))

router.get('/home', isAuth, isLoggedIn('/login'), checkRoles('Supplier'), catchErrors(showHome))

module.exports = router
