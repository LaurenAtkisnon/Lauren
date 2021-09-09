var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lauren Made An App' });
});

router.get('/another', function(req, res, next) {
  res.render('another', { title: 'Page 2 of Lauren\'s App' });
});

module.exports = router;
