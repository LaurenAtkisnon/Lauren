var express = require('express');
var router = express.Router();
var math = require('./math');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lauren Made An App' });
});

router.get('/another', function(req, res, next) {
  res.render('another', { title: 'Page 2 of Lauren\'s App' });
});

router.get('/api/add', function(req, res, next) {
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(req.query.n2);
  res.json(math.add(n1,n2)); /*takes the math.js function */
});

module.exports = router;
