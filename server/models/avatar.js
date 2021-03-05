let mongoose = require('mongoose')
let uuid = require('uuid')

const avatarSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v1
  },
  avatar: {
    type: Buffer
  }
})

const Avatar = mongoose.model('avatar', avatarSchema);

module.exports = Avatar;
