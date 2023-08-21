var express = require('express');
const service = require('../service/service');
var router = express.Router();

/* default get */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',service.registerUser);

module.exports = router;