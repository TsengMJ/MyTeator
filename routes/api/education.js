let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create education api")
})

router.put('/', (req, res) => {
  res.send("update education api")
})

router.get('/:teacher_id', (req, res) => {
  res.send("get education api")
})

/* GET users listing. */

module.exports = router;
