let express = require('express');
let router = express.Router();
let models = require('../../models')

router.post('/', async (req, res) => {
  const customer = new models.Customer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    account_email: req.body.account_email,
    password: req.body.password
  })

  await customer.save();

  res.send("Success")
})

router.put('/', (req, res) => {
  res.send("update customer api")
})

router.get('/', async (req, res) => {
  console.log("get all customer api")

})

router.post('/login', (req, res) => {
  models.Customer
    .find({ account_email: req.body.account_email, password: req.body.password })
    .select('_id first_name last_name account_email')
    .exec((err, results) => {
      if (err) {
        console.log(`Error at Login API: ${err}`)
        res.send(`Error`)
      }
      else if (!results.length) {
        console.log(`Failed to Login`)
        res.send(`Failed to Login`)
      }
      else {
        res.send(results[0])
      }
    })
})


/* GET users listing. */

module.exports = router;
