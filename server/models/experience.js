
let mongoose = require('mongoose')
let uuid = require('uuid')

const experienceSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  company: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
  },
  employment_date: {
    type: Date,
  },
  resignation_date: {
    type: Date,
  },
  description: {
    type: String
  },
  fk_customer_id: {
    type: String,
    required: true
  }

})

const Experience = mongoose.model('experience', experienceSchema);

module.exports = Experience;
