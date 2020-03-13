var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://auth0-test-117.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://localhost:3000/users',
  issuer: 'https://auth0-test-117.auth0.com/',
  algorithms: ['RS256']
});

/* get users. */
router.get('/', jwtCheck, function (req, res, next) {
  res.status(200).json({ result: 'create user here', user: req.user });
});

/* get users. */
router.get('/test', jwtCheck, function (req, res, next) {
  res.status(200).json({ result: 'users test', user: req.user });
});

module.exports = router;
