const {Schema, model} = require('mongoose')
const PLM = require('passport-local-mongoose')

const supplierSchema = new Schema({
  name: String,
  lastName: String,
  password: String,
  email: String
}, {
  timestamps: true
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  hashField: "password"
});
module.exports = model('Supplier', supplierSchema)