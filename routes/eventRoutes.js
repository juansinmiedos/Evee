const express = require('express')
const router = express.Router()
const { createEvent, viewEvent, createCake } = require('../controllers/event')

router.get('/create-event', viewEvent)
// router.post('/create-even', createEvent)
router.get('/create-cake', createCake)
module.exports = router
