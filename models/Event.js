const { Schema, model } = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
  {
    nameOfEvent: String,
    numberOfGuests: Number,
    date: Date,
    address: String,
    location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: [Number]
    },
    imgEvent: {
      type: String,
      default:
        'https://thumbs.dreamstime.com/z/wedding-couple-icons-cartoon-style-vector-illustration-cute-flat-isolated-background-happy-64944082.jpg'
    }
  },
  { timestamps: true }
)

module.exports = model('Event', eventSchema)
