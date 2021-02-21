let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create license api")
})

router.put('/', (req, res) => {
  res.send("update license api")
})

router.get('/:teacher_id', (req, res) => {
  res.send("get license api")
})

/* GET users listing. */

module.exports = router;
