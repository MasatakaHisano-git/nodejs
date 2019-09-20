var express = require('express');
var router = express.Router();

router.use('/uri_1', require('./uri_1.js'));
router.use('/uri_2', require('./uri_2.js'));
router.use('/uri_3', require('./uri_3.js'));
router.use('/uri_4', require('./uri_4.js'));
router.use('/uri_5', require('./uri_5.js'));
router.use('/uri_6', require('./uri_6.js'));

module.exports = router;
