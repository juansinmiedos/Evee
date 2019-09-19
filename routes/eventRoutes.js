const router = require('express').Router()
const uploadCloud = require('../config/multer')
const catchErrors = require('../middlewares/catchErrors')

const {
  createEvent,
  viewEvent,
  createCake,
  createPhoto,
  createFurniture,
  viewFurniture,
  viewPhoto,
  viewCake,
  viewEventPage
} = require('../controllers/event')

router.get('/create-event', viewEvent)
router.post('/create-event', uploadCloud.single('photo'), catchErrors(createEvent))

router.get('/create-cake', viewCake)
router.post('/create-cake', createCake)

router.get('/create-photo', viewPhoto)
router.post('/create-photo', createPhoto)

router.get('/create-furniture', viewFurniture)
router.post('/create-furniture', uploadCloud.single('photo'), catchErrors(createFurniture))

router.get('/event-page', viewEventPage)

module.exports = router
