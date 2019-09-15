const User = require('../models/User')
const passport = require('passport');

exports.showLogin = (req, res) => {
  res.render("auth/login", { "message": req.flash("error") })
}

exports.toLogin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
})

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

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      name,
      lastName,
      role,
      password: hashPass
    });

    newUser.save()
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  })
}

exports.toLogOut = (req, res) => {
  req.logout();
  res.redirect("/");
}