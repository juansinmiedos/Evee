const { Schema, model } = require('mongoose')

const eventSchema = new Schema(
  {
    nameOfEvent: String,
    numberOfGuests: Number,
    date: Date,
    address: String,
    description: String,
    location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: [Number]
    },
    selectCake: Boolean,
    selectFurniture: Boolean,
    selectPhoto: Boolean,
    imgEvent: {
      type: String,
      default:
        'https://thumbs.dreamstime.com/z/wedding-couple-icons-cartoon-style-vector-illustration-cute-flat-isolated-background-happy-64944082.jpg'
    }
  },
  { timestamps: true }
)

module.exports = model('Event', eventSchema)
