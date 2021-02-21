var express = require('express');
var router = express.Router();
var apiRouter = require('./api')

router.use('/', apiRouter)

module.exports = router;
