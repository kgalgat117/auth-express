var express = require('express');
var router = express.Router();
var cognitoAuth = require('./../lib/cognitoAuth')

const cognitoAuthMiddleware = cognitoAuth.getVerifyMiddleware()

/* GET users listing. */
router.get('/', cognitoAuthMiddleware, function (req, res, next) {
  res.status(200).json(req.user);
});

module.exports = router;
