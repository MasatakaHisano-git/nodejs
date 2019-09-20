var express = require('express');
var router = express.Router();

router.get('/test', function(req, res) {
  res.json({
    "id" 85325,
    "name": "QBS07060"
  });
});

module.exports = router;
