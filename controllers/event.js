const Event = require('../models/Event')
// const passport = require('passport');

exports.viewEvent = (req, res) => {
  res.render('formWedding/create-event')
}

exports.createCake = (req, res) => {
  res.render('formWedding/create-cake')
}

exports.createPhoto = (req, res) => {
  res.render('formWedding/create-photo')
}

exports.createFurniture = (req, res) => {
  res.render('formWedding/create-furniture')
}

exports.createEvent = async (req, res) => {
  const { nameOfEvent, numberOfGuests, date, address, location } = req.body
  const { url: photo } = req.file
  // const {id: owner} = req.user

  await Event.create({
    nameOfEvent,
    numberOfGuests,
    date,
    address,
    location,
    photo
  })
  res.redirect('/profile')
}
