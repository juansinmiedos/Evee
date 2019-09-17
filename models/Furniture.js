const { model, Schema } = require('mongoose')

const furnitureSchema = new Schema(
  {
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
    lace: Boolean,
    tent: String,
    priceOfService: Number,
    photo: {
      type: String,
      default: 'https://www.dailydot.com/wp-content/uploads/e52/31/87610fa1a0ae891d.png'
      // required: true
    }
  },
  { timestamps: true }
)

module.exports = model('Furniture', furnitureSchema)
