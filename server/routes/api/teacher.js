let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create teacher api")
})

router.put('/', (req, res) => {
  res.send("update teacher api")
})

router.get('/', (req, res) => {
  res.send("get all teacher api")
})

router.get('/:teacher_id', (req, res) => {
  res.send("get teacher api")
})

/* GET users listing. */

module.exports = router;
