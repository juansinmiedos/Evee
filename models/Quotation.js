const { Schema, model } = require('mongoose')

const quotationSchema = new Schema({
  priceOfQoutation: {
    type: Number,
    descriptionQuotation: String
  }
})

module.exports = model('Quotation', quotationSchema)
