let mongoose = require('mongoose')
let uuid = require('uuid')

const customerInfoSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  cell_phone: {
    type: String,
  },
  local_phone: {
    type: String,
  },
  address: {
    type: String,
  },
  main_email: {
    type: String,
  },
  alternate_email: {
    type: String,
  },
  fk_customer_id: {
    type: String,
    required: true,
  },
})

const CustomerInfo = mongoose.model('customer_info', customerInfoSchema);

module.exports = CustomerInfo;
