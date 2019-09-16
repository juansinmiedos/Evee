const User = require('../models/User')

exports.showLogin = (req, res) => {
  res.render("auth/login", { "message": req.flash("error") })
}

exports.toLogin = (req, res) => {
  res.redirect('/profile')
}

exports.showSignup = (req, res) => {
  res.render("auth/signup")
}

exports.toSignup = (req, res) => {
  const {email, name, lastName, role} = req.body;
  const password = req.body.password;
  if (email === "" || password === "") {
    res.render("auth/signup", { message: "Indicate email and password" });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The email already exists" });
      return;
    }

    User.register(new User({email, name, lastName, role}), password, function(err, account) {
      if (err) {
        return res.json(err)
      }
      return res.redirect('/login')
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