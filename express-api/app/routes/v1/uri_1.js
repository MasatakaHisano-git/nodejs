var express = require('express');
var router = express.Router();

router.get('/test', function(req, res) {
  console.log(req.query.id);
  if(req.query.id === '1-1'){
    res.json({
      "id" : 1,
      "name": "QBS1"
    });
  } else if(req.query.id === '1-2') {
    res.json(
    {
      "info" :[
        {
          "id" : 1,
          "name": "QBS10"
        },
        {
          "id" : 2,
          "name": "QBS10"
        },
        {
          "id" : 3,
          "name" : "QBS2"
        },
        {
          "id" : 4,
          "name" : "QBS2"
        },
        {
          "id" : 5,
          "name" : "QBS2"
        },
        {
          "id" : 6,
          "name" : "QBS2"
        },
        {
          "id" : 7,
          "name" : "QBS2"
        },
        {
          "id" : 8,
          "name" : "QBS2"
        },
        {
          "id" : 9,
          "name" : "QBS2"
        },
        {
          "id" : 10,
          "name" : "QBS"
        }
      ]
    });
  }
});

module.exports = router;
