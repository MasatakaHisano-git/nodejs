var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/test', function(req, res) {
  setTimeout(function() {
    res.json(
    {
    "ev_data": [
        {
            "sharyo_id": "00000000000000000001",
            "yuko_flag": 1,
            "gw_id": "00000000000000000001",
            "saidaishutsuryoku": 99.99,
            "saishoshutsuryoku": 11.11,
            "soc_jogen": 88.88,
            "soc_kagen": 22.22,
            "chikuden_koritsu": 50.99,
            "henka_sokudo": 10000,
            "saidai_yoryo": 99999
        },
        {
            "sharyo_id": "00000000000000000002",
            "yuko_flag": 1,
            "gw_id": "00000000000000000001",
            "saidaishutsuryoku": 99.99,
            "saishoshutsuryoku": 11.11,
            "soc_jogen": 88.88,
            "soc_kagen": 22.22,
            "chikuden_koritsu": 50.99,
            "henka_sokudo": 10000,
            "saidai_yoryo": 99999
        }
    ]
    } 
    );
  }, 10000);
});
