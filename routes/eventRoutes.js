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
router.post('/create-cake', uploadCloud.array('photosCake'), createCake)

router.get('/create-photo', viewPhoto)
router.post('/create-photo', uploadCloud.array('photosPhoto'), createPhoto)

router.get('/create-furniture', viewFurniture)
router.post('/create-furniture', uploadCloud.array('photosFurniture'), catchErrors(createFurniture))

router.get('/event-page', viewEventPage)

module.exports = router
