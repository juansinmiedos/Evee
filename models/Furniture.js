const { model, Schema } = require('mongoose')

const furnitureSchema = new Schema(
  {
    idEvent: String,
    limitPrice: Number,
    typeOfTables: {
      type: String,
      enum: ['Triangular', 'Round', 'Rectangular', 'Hexagonal', 'Square', 'Other'],
      default: 'Other'
    },
    mobiliaryStyle: {
      type: String,
      enum: ['Minimalist', 'Wood', 'Plastic', 'Steel', 'Other'],
      default: 'Other'
    },
    tableClothsAndChairs: {
      type: String,
      enum: ['Silk', 'Cotton', 'Poliester', 'Linen', 'Mixed', 'Other'],
      default: 'Other'
    },
    color: String,
    tent: String,
    description: String,
    //weddingPhotos: [String]
  },
  { timestamps: true }
)

module.exports = model('Furniture', furnitureSchema)
