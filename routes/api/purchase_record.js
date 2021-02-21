let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create purchase_record api")
})

router.put('/', (req, res) => {
  res.send("update purchase_record api")
})

router.get('/', (req, res) => {
  res.send("get all purchase_record api")
})

router.get('/:purchase_record_id', (req, res) => {
  res.send("get purchase_record api")
})

/* GET users listing. */

module.exports = router;
