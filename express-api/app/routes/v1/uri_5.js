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
            },
            {
                "sharyo_id": "00000000000000000003",
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
                "sharyo_id": "00000000000000000004",
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
                "sharyo_id": "00000000000000000005",
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
                "sharyo_id": "00000000000000000006",
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
                "sharyo_id": "00000000000000000007",
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
                "sharyo_id": "00000000000000000008",
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
                "sharyo_id": "00000000000000000009",
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
                "sharyo_id": "00000000000000000010",
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
                "sharyo_id": "00000000000000000011",
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
                "sharyo_id": "00000000000000000012",
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
                "sharyo_id": "00000000000000000013",
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
                "sharyo_id": "00000000000000000014",
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
                "sharyo_id": "00000000000000000015",
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
                "sharyo_id": "00000000000000000016",
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
                "sharyo_id": "00000000000000000017",
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
                "sharyo_id": "00000000000000000018",
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
                "sharyo_id": "00000000000000000019",
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
                "sharyo_id": "00000000000000000020",
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
                "sharyo_id": "00000000000000000021",
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
                "sharyo_id": "00000000000000000022",
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
                "sharyo_id": "00000000000000000023",
                "yuko_flag": 0,
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
                "sharyo_id": "00000000000000000024",
                "yuko_flag": 0,
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
                "sharyo_id": "00000000000000000025",
                "yuko_flag": 0,
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
                "sharyo_id": "00000000000000000026",
                "yuko_flag": 0,
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
                "sharyo_id": "00000000000000000027",
                "yuko_flag": 0,
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
                "sharyo_id": "00000000000000000028",
                "yuko_flag": 0,
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
                "sharyo_id": "00000000000000000029",
                "yuko_flag": 0,
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
                "sharyo_id": "00000000000000000030",
                "yuko_flag": 0,
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