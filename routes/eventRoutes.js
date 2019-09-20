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
  viewEventPage,
  updateProfile,
  deleteEvent
} = require('../controllers/event')

router.post('/create-event', uploadCloud.single('photo'), catchErrors(createEvent))

router.post('/create-cake', uploadCloud.array('photosCake'), createCake)

router.post('/create-photo', uploadCloud.array('photosPhoto'), createPhoto)

router.post('/create-furniture', uploadCloud.array('photosFurniture'), catchErrors(createFurniture))

router.get('/event-page', viewEventPage)

router.post('/profile', uploadCloud.single('photo'), catchErrors(updateProfile))

router.post('/profile/:id', catchErrors(deleteEvent))

module.exports = router
