let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create product api")
})

router.put('/', (req, res) => {
  res.send("update product api")
})

router.get('/', (req, res) => {
  res.send("get all product api")
})

router.get('/:product_id', (req, res) => {
  res.send("get product api")
})

/* GET users listing. */

module.exports = router;
