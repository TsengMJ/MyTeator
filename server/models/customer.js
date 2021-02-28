
let mongoose = require('mongoose')
let uuid = require('uuid')

const customerSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  account_email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
