const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
    role: {
      type: String,
      enum: ['Wedding', 'Supplier']
    },
    imgProfile: {
      type: String,
      default: 'https://image21.net/103/ring_png/ring_png_0.png'
    },
    status: {
      type: String,
      enum: ['Pending Confirmation', 'Active'],
      default: 'Pending Confirmation'
    },
    confirmationCode: {
      type: String,
      unique: Boolean
    },
    suppliesPhoto: String,
    suppliesCake: String,
    suppliesFurniture: String
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })
module.exports = model('User', userSchema)
