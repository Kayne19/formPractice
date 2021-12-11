var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res) {
  console.log(req.body.name);
  console.log(req.body.description);
  console.log(req.body.agree);
  console.log(req.body.dayRating);
  res.render('results', {
    name: req.body.name,
    description: req.body.description,
    agree: req.body.agree,
    dayRating: req.body.dayRating
  })
});

module.exports = router;
