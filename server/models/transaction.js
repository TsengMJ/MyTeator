let mongoose = require('mongoose')
let uuid = require('uuid')

const transactionSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
  },
  state: {
    type: String,
  },
  description: {
    type: String
  },
  fk_customer_id: {
    type: String,
    required: true,
  },
})

const Transaction = mongoose.model('service_info', transactionSchema);

module.exports = Transaction;
