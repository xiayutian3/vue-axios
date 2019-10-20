const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true, unique: true },
  tel: { type: Number, required: true },
  id: Number
})
module.exports = model('User', userSchema)
