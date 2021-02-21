let express = require('express');
let router = express.Router();

let teacherRouter = require('./teacher')
let licenseRouter = require('./license')
let languageRouter = require('./language')
let educationRouter = require('./education')
let portfolioRouter = require('./portofolio')
let experienceRouter = require('./experience')
let studentRouter = require('./student')
let article = require('./article')
let caseInfoRouter = require('./case_info')
let purchaseRecordRouter = require('./purchase_record')
let productRouter = require('./product')
let ecpayRouter = require('./ecpay')

router.use('/teacher', teacherRouter)
router.use('/license', licenseRouter)
router.use('/language', languageRouter)
router.use('/education', educationRouter)
router.use('/experience', experienceRouter)
router.use('/portfolio', portfolioRouter)
router.use('/student', studentRouter)
router.use('/article', article)
router.use('/case_info', caseInfoRouter)
router.use('/purchase_record', purchaseRecordRouter)
router.use('/product', productRouter)
router.use('/ecpay', ecpayRouter)




/* GET users listing. */

module.exports = router;
