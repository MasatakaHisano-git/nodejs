var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
  res.json({
    "id": 1,
    "name" : "QBSa"
  });
});

module.exports = router;
