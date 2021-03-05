let express = require('express');
let router = express.Router();

let customerRouter = require('./customer')
router.use('/customer', customerRouter)

let productRouter = require('./product')
router.use('/product', productRouter)

// let licenseRouter = require('./license')
// let languageRouter = require('./language')
// let educationRouter = require('./education')
// let portfolioRouter = require('./portofolio')
// let experienceRouter = require('./experience')
// let article = require('./article')
// let caseInfoRouter = require('./case_info')
// let purchaseRecordRouter = require('./purchase_record')
// let ecpayRouter = require('./ecpay')

// router.use('/license', licenseRouter)
// router.use('/language', languageRouter)
// router.use('/education', educationRouter)
// router.use('/experience', experienceRouter)
// router.use('/portfolio', portfolioRouter)
// router.use('/article', article)
// router.use('/case_info', caseInfoRouter)
// router.use('/purchase_record', purchaseRecordRouter)
// router.use('/product', productRouter)
// router.use('/ecpay', ecpayRouter)




/* GET users listing. */

module.exports = router;
