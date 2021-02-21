let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create portfolio api")
})

router.put('/', (req, res) => {
  res.send("update portfolio api")
})

router.get('/:teacher_id', (req, res) => {
  res.send("get portfolio api")
})

/* GET users listing. */

module.exports = router;
