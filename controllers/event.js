const Event = require('../models/Event')
const Furniture = require('../models/Furniture')
const Photo = require('../models/Photo')
const Cake = require('../models/Cake')

exports.viewEvent = (req, res) => {
  res.render('formWedding/create-event')
}

exports.createEvent = async (req, res) => {
  const { nameOfEvent, numberOfGuests, date, description, address, lng, lat } = req.body
  console.log(req.body)
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
  res.redirect('/create-event')
}

exports.viewFurniture = (req, res) => {
  res.render('formWedding/create-furniture')
}

exports.createFurniture = async (req, res) => {
  console.log(req.body)
  const { typeOfTables, mobiliaryStyle, tableClothsAndChairs, tent } = req.body
  await Furniture.create({
    typeOfTables,
    mobiliaryStyle,
    tableClothsAndChairs,
    tent
  })
  res.redirect('/create-furniture')
}

exports.viewPhoto = (req, res) => {
  res.render('formWedding/create-photo')
}

exports.createPhoto = async (req, res) => {
  const { typeOfAlbum, hoursOfService } = req.body
  await Photo.create({
    typeOfAlbum,
    hoursOfService
  })
  res.redirect('/create-photo')
}

exports.viewCake = (req, res) => {
  res.render('formWedding/create-cake')
}

exports.createCake = async (req, res) => {
  const { name, flavor, term, filling, floors } = req.body
  // const { url: imgCake } = req.file
  await Cake.create({
    name,
    flavor,
    term,
    filling,
    floors
    // imgCake
  })
  res.redirect('/create-cake')
}
