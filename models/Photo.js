const { Schema, model } = require('mongoose')

const photoSchema = new Schema(
  {
    idEvent: String,
    limitPrice: Number,
    typeOfAlbum: {
      type: String,
      enum: ['Photo Album', 'Video Album', 'Both']
    },
    hoursOfService: Number,
    description: String,
  },
  { timestamps: true }
)

module.exports = model('Photo', photoSchema)
