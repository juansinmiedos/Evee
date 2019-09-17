const User = require('../models/User')
const nodemailer = require('nodemailer')

exports.showLogin = (req, res) => {
  res.render("auth/login", { "message": req.flash("error") })
}

exports.toLogin = (req, res) => {
  res.redirect('/profile')
}

exports.showSignup = (req, res) => {
  res.render("auth/signup")
}

exports.toSignup = async(req, res) => {
  const {email, name, lastName, role} = req.body;
  const password = req.body.password;
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let confirmationCode = '';
  for (let i = 0; i < 25; i++) {
    confirmationCode += characters[Math.floor(Math.random() * characters.length )];
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
    html: `<a href="http://localhost:3000/confirm/${confirmationCode}"><h1>Click here to confirm your account</h1></a>`
  })

  if (email === "" || password === "") {
    res.render("auth/signup", { message: "Indicate email and password" });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The email already exists" });
      return;
    }

    User.register(new User({email, name, lastName, role, confirmationCode}), password, function(err, account) {
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
      res.render('auth/profile', { userEmail, userId })
    })
  })
}

exports.toLogOut = (req, res) => {
  req.logout();
  res.redirect("/");
}

exports.showProfile = async(req, res) => {
  console.log('entra a profile?')
  const user = await User.findById(req.user.id)

  res.render('auth/profile', user)
}