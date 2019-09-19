const { Schema, model } = require('mongoose')

const cakeSchema = new Schema(
  {
    idEvent: String,
    limitPrice: Number,
    name: String,
    flavor: String,
    term: {
      type: String,
      enum: ['Glazed', 'Fondant', 'Meringue', 'Chantilli']
    },
    filling: String,
    floors: Number,
    description: String,
    weddingPhotos: [String]
  },
  { timestamps: true }
)

module.exports = model('Cake', cakeSchema)
