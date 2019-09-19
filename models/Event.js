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
    selectCake: String,
    selectFurniture: String,
    selectPhoto: String
  },
  { timestamps: true }
)

module.exports = model('Event', eventSchema)
