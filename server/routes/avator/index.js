let express = require('express');
let router = express.Router();
let models = require('../../models')

const multer = require('multer')
const sharp = require('sharp')

const upload = multer({
  limits: {
    // 限制上傳檔案的大小為 1MB
    fileSize: 1000000,
  },
  fileFilter (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error('Please upload an image'))
    }
    cb(null, true)
  }
})



router.post('/', upload.single('avatar'), async (req, res) => {

  const webp = await sharp(req.file.buffer)
    .resize({ width: 200, height: 100 })
    .webp({lossless: true})
    .toBuffer()


  console.log("Original File Size: ", req.file.buffer.length)
  console.log("Webp Format Size: ", webp.length)
  const avatar = new models.Avatar({
    avatar: req.file.buffer,
  })

  // avatar.save()

  res.status(200).send()
})

router.get('/', async (req, res) => {
  models.Avatar
    .find()
    .exec((err, results) =>{
      console.log(results[0])
      res.status(200)
        .set('Content-Type', 'image/png')
        .send(results[0].avatar)
    })
})


module.exports = router;
