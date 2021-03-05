let mongoose = require('mongoose')
let uuid = require('uuid')

const languageSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  listening: {
    type: String,
  },
  speaking: {
    type: String,
  },
  reading: {
    type: String,
  },
  writing: {
    type: String
  },
  fk_customer_id: {
    type: String,
    required: true,
  },
})

const LanguageInfo = mongoose.model('language', languageSchema);

module.exports = LanguageInfo;
