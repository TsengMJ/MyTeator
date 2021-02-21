let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create article api")
})

router.put('/', (req, res) => {
  res.send("update article api")
})

router.get('/', (req, res) => {
  res.send("get all article api")
})

router.get('/:teacher_id', (req, res) => {
  res.send("get article api")
})

/* GET users listing. */

module.exports = router;
