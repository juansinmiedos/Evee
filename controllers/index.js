const User = require('../models/User')
const nodemailer = require('nodemailer')
const passport = require('passport')

exports.showLogin = (req, res) => {
  res.render('auth/login')
}

exports.toLogin = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.render('auth/login', { err })
    }
    if (!user) {
      return res.render('auth/login', { err })
    }
    req.logIn(user, err => {
      if (err) {
        return res.render('auth/login', { err })
      }
      if (user.status === 'Pending Confirmation') {
        return res.render('auth/login', { message: 'Please verify your email' })
      }
      return res.redirect('/profile')
    })
  })(req, res, next)
}

exports.showSignup = (req, res) => {
  res.render('auth/signup')
}

<<<<<<< HEAD
exports.toSignup = async (req, res) => {
  const { email, name, lastName, role } = req.body
  const password = req.body.password
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let confirmationCode = ''
=======
exports.toSignup = async(req, res) => {
  const {email, name, lastName, role, suppliesFurniture, suppliesCake, suppliesPhoto} = req.body;
  const password = req.body.password;
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let confirmationCode = '';
>>>>>>> c7340a95a07042e79a9a1f9bbf6b5bbed5024511
  for (let i = 0; i < 25; i++) {
    confirmationCode += characters[Math.floor(Math.random() * characters.length)]
  }
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })
  const info = await transporter.sendMail({
    from: `Evee - Wedding Planner's New Best Friend <${process.env.EMAIL}>`,
    to: email,
    subject: 'Confirm your account!',
    html: `
            <a href="${req.headers.origin}/confirm/${confirmationCode}"><img src="https://res.cloudinary.com/ironhacker/image/upload/v1568781197/Evee_upu2zq.png" width="700px"></a>`
  })

  if (email === '' || password === '') {
    res.render('auth/signup', { message: 'Indicate email and password' })
    return
  }

  User.findOne({ email }, 'email', (err, user) => {
    if (user !== null) {
      res.render('auth/signup', { message: 'The email already exists' })
      return
    }

<<<<<<< HEAD
    User.register(new User({ email, name, lastName, role, confirmationCode }), password, function(
      err,
      account
    ) {
=======
    User.register(new User({email, name, lastName, role, confirmationCode, suppliesFurniture, suppliesCake, suppliesPhoto}), password, function(err, account) {
>>>>>>> c7340a95a07042e79a9a1f9bbf6b5bbed5024511
      if (err) {
        return res.json(err)
      }
      return res.render('auth/confirmation')
    })
  })
}

exports.confirmation = (req, res) => {
  User.find({ confirmationCode: req.params.confirmationCode }).then(user => {
    let id = user[0]._id

    User.findByIdAndUpdate(id, { status: 'Active' }, function(err, result) {
      if (err) {
        console.log(err)
      }
      let userEmail = user[0].email
      let userId = user[0]._id
      res.render('auth/confirmation-done', { userEmail, userId })
    })
  })
}

exports.toLogOut = (req, res) => {
  req.logout()
  res.redirect('/')
}

exports.showProfile = async (req, res) => {
  const user = await User.findById(req.user._id)

  res.render('auth/profile', user)
}

exports.showHome = async (req, res) => {
  const user = await User.findById(req.user._id)

  res.render('home', user)
}

// exports.confirmation = (req, res) => {
//   User.find({ _id: req.params._id })
//   .then(user => {
//     let id = user[0]._id
//   })
// }
