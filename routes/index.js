var express = require('express');
var router = express.Router();

const controlator = require("../controlador/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes', controlator.index);
module.exports = router;
