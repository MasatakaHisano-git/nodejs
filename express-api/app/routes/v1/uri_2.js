var express = require('express');
var router = express.Router();
//const fs = require('fs');

router.get('/test', function(req, res) {

  var filePath = "/root/express-api/app/routes/v1"
  var fileName = "test_10mb.txt";
  var file = "/root/express-api/app/routes/v1/test.txt"
  //try {
  //  fs.statSync(file);
  //  console.log("file exist");
  //  return true
  //} catch(err) {
  //  if(err.code === 'ENOENT') return false
  //  console.log("file doesnot exist");
  //}
  res.attachment(file);
  res.download(file);
  
  res.json({
    "id" : 4,
    "name": "QBS4"
  });
});

module.exports = router;
