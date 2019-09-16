const express = require('express')
const router = express.Router()
const {
  createEvent,
  viewEvent,
  createCake,
  createPhoto,
  createFurniture
} = require('../controllers/event')

router.get('/create-event', viewEvent)
// router.post('/create-even', createEvent)
router.get('/create-cake', createCake)

router.get('/create-photo', createPhoto)

router.get('/create-furniture', createFurniture)

module.exports = router
