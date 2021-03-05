let mongoose = require('mongoose')
let uuid = require('uuid')

const portfolioSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  title: {
    type: String,
  },
  file: {
    type: Buffer
  },
  fk_customer_id: {
    type: String,
    required: true,
  },
})

const Portfolio = mongoose.model('portfolio', portfolioSchema);

module.exports = Portfolio;
