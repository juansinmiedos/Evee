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
      color: String,
      typeOfCloth: {
        type: String,
        enum: ['Silk', 'Cotton', 'Poliester', 'Linen', 'Mixed', 'Other'],
        default: 'Other'
      }
    },
    lace: Boolean,
    tent: Boolean,
    priceOfService: Number,
    imgFurnitures: {
      type: [String],
      default: '',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('Furniture', furnitureSchema)