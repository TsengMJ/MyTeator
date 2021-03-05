let mongoose = require('mongoose')
let uuid = require('uuid')

const serviceInfoSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  max_price: {
    type: Number,
  },
  min_price: {
    type: Number,
  },
  area: {
    type: String,
  },
  method: {
    type: String,
  },
  target_customer: {
    type: String,
  },
  available_time: {
    type: String
  },
  fk_customer_id: {
    type: String,
    required: true,
  },
})

const ServiceInfo = mongoose.model('service_info', serviceInfoSchema);

module.exports = ServiceInfo;
