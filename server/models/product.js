let mongoose = require('mongoose')
let uuid = require('uuid')

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: Buffer
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  categories: [{
    type: String
  }],
  suitable_age: {
    type: String,
    default: '11111'
  },
  inventory: {
    type: Number,
    default: 0
  },
})

const Product = mongoose.model('product', productSchema);

module.exports = Product
