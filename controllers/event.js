const Event = require('../models/Event')
const Furniture = require('../models/Furniture')
const Photo = require('../models/Photo')
const Cake = require('../models/Cake')
const User = require('../models/User')

exports.viewEvent = (req, res) => {
  res.render('formWedding/create-event')
}

exports.createEvent = async (req, res) => {
  const { nameOfEvent, numberOfGuests, date, description, address, lng, lat } = req.body
  await Event.create({
    nameOfEvent,
    numberOfGuests,
    date,
    description,
    address,
    location: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  })
  res.redirect('/profile')
}

exports.viewFurniture = (req, res) => {
  res.render('formWedding/create-furniture')
}

exports.createFurniture = async (req, res, next) => {
  const { typeOfTables, mobiliaryStyle, tableClothsAndChairs, tent, description } = req.body
  await Furniture.create({
    typeOfTables,
    mobiliaryStyle,
    tableClothsAndChairs,
    tent,
    description
  })
  res.redirect('/profile')
}

exports.viewPhoto = (req, res, next) => {
  res.render('formWedding/create-photo')
}

exports.createPhoto = async (req, res, next) => {
  const { typeOfAlbum, hoursOfService, description } = req.body
  await Photo.create({
    typeOfAlbum,
    hoursOfService,
    description
  })
  next()
}

exports.viewCake = (req, res) => {
  res.render('formWedding/create-cake')
}

exports.createCake = async (req, res) => {
  const { name, flavor, term, filling, floors, description } = req.body
  await Cake.create({
    name,
    flavor,
    term,
    filling,
    floors,
    description
  })
  res.redirect('/profile')
}

//Traemos la información de todos los modelos

exports.viewEventPage = async (req, res) => {
  const user = await User.find()
  const event = await Event.find()
  const furniture = await Furniture.find()
  const cake = await Cake.find()
  const photo = await Photo.find()

  res.render('event-page', { event, user, furniture, cake, photo })
}

exports.updateProfile = async (req, res) => {
  const { name, lastName } = req.body
  const { _id } = req.user
  const { url: imgProfile } = req.file
  const updatedUser = {
    name,
    lastName,
    imgProfile
  }
  await User.findByIdAndUpdate(_id, updatedUser)
  res.redirect('/profile')
}
