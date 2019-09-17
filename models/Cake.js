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
    imgCake: {
      type: [String],
      default:
        'https://www.brides.com/thmb/krBZUVt60eSHeMTP-piBwWJ5SpU=/2207x2207/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__595d4b0d899f525cc97d971c__11-081ce1d7e3964742ab7d7b1e52830989.jpeg'
    }
  },
  { timestamps: true }
)

module.exports = model('Cake', cakeSchema)
