var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('landing/landing', {title: "Real-Time Game Analytic"});
});

module.exports = router;
