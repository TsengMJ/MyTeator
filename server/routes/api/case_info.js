let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
  res.send("create case_info api")
})

router.put('/', (req, res) => {
  res.send("update case_info api")
})

router.get('/', (req, res) => {
  res.send("get all case_info api")
})

router.get('/:case_id', (req, res) => {
  res.send("get case_info api")
})

/* GET users listing. */

module.exports = router;
