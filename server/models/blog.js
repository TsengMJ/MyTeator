let mongoose = require('mongoose')
let uuid = require('uuid')

const blogSchema = new mongoose.Schema({
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

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
