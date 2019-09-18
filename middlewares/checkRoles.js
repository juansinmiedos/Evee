module.exports = role => (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.role === role) {
      next()
    } else {
      res.redirect('profile')
    }
  } else {
    res.redirect('profile')
  }
}