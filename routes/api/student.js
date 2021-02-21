let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create student api")
})

router.put('/', (req, res) => {
  res.send("update student api")
})

router.get('/', (req, res) => {
  res.send("get all student api")
})

router.get('/:student_id', (req, res) => {
  res.send("get student api")
})

/* GET users listing. */

module.exports = router;
