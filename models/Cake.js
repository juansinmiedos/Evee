const { Schema, model } = require('mongoose')

const cakeSchema = new Schema(
  {
    name: String,
    flavor: String,
    term: {
      type: String,
      enum: ['Glazed', 'Fondant', 'Meringue', 'Chantilli']
    },
    filling: String,
    floors: Number,
    description: String
  },
  { timestamps: true }
)

module.exports = model('Cake', cakeSchema)
