let express = require('express');
let router = express.Router();
let multer = require('multer')
let sharp = require('sharp')
let { Product } = require('../../models')

const upload = multer({
  fileFilter (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
      cb(new Error('Please upload an image'))
    }
    cb(null, true)
  }
})


// Create Product API
router.post('/', upload.single('image'), async (req, res) => {
  const image_webp = await sharp(req.file.buffer)
    .resize({ width: 300, height: 300 })
    .webp({ lossless: true })
    .toBuffer()

  // console.log("Original Size: ")
  console.log("Percentage: ", (req.file.buffer.length / image_webp.length).toString())

  const product = new Product({
    name: req.body.name,
    image: image_webp,
    price: req.body.price,
    discount: req.body.discount,
    description: req.body.description,
    categories: req.body.categories,
    suitable_age: req.body.suitable_age,
    inventory: req.body.inventory
  })

  await product.save()
  res.status(200).send("Created a product~")
})

// Return all products' ID
router.get('/id', (req, res) => {
  Product
    .find()
    .select('_id')
    .exec((err, results) => {
      if (err) {
        res.send(`Error: ${err}`)
      }
      else if (!results.length) {
        res.send(`Failed to Get products' ID`)
      }
      else {
        res.send(results)
      }
    })
})

// Get Specific product with given product id
router.get('/', (req, res) => {
  Product
    .find({_id: req.query.ids})
    .select('_id name price discount description categories inventory')
    .exec((err, results) => {
      if (err) {
        res.send(`Error: ${err}`)
      }
      else if (!results.length) {
        res.send(`Failed to Get product`)
      }
      else {
        console.log(results)
        res.send(results)
      }
    })
})

router.get('/image/:id', (req, res) => {
  console.log(req.params.id)
  Product.find({_id: req.params.id})
    .select('image')
    .exec((err, image) => {
      if (err) {
        res.send(`Error: ${err}`)
      }
      else if (!image.length) {
        res.send(`Failed to Get product Image`)
      }
      else {
        console.log(image)
        res.set('Content-Type', 'image/png').send(image[0].image)
      }
    })
})

router.put('/', (req, res) => {
  res.send("update product api")
})

module.exports = router;
