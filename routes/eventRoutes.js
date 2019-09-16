const express = require('express')
const router = express.Router()
const { createEvent, viewEvent } = require('../controllers/event')

router.get('/create-event', viewEvent)
// router.post('/create-even', createEvent)

module.exports = router
