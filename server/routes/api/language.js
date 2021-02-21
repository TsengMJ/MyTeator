let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create language api")
})

router.put('/', (req, res) => {
  res.send("update language api")
})

router.get('/:teacher_id', (req, res) => {
  res.send("get language api")
})

/* GET users listing. */

module.exports = router;
