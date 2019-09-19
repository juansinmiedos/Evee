const Event = require('../models/Event')
const Furniture = require('../models/Furniture')
const Photo = require('../models/Photo')
const Cake = require('../models/Cake')

exports.viewEvent = (req, res) => {
  res.render('formWedding/create-event')
}

exports.createEvent = async (req, res, next) => {
  const { nameOfEvent, numberOfGuests, date, description, address, lng, lat } = req.body
  await Event.create({
    nameOfEvent,
    numberOfGuests,
    date,
    description,
    address
  })
  res.render('auth/profile')
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
  res.render('auth/profile')
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
  res.render('auth/profile')
}

exports.viewCake = (req, res) => {
  res.render('formWedding/create-cake')
}

exports.createCake = async (req, res, next) => {
  const { name, flavor, term, filling, floors, description } = req.body
  await Cake.create({
    name,
    flavor,
    term,
    filling,
    floors,
    description
  })
  res.render('auth/profile')
}
