let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create experience api")
})

router.put('/', (req, res) => {
  res.send("update experience api")
})

router.get('/:teacher_id', (req, res) => {
  res.send("get experience api")
})

/* GET users listing. */

module.exports = router;
