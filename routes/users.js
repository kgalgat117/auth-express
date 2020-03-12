var express = require('express');
var router = express.Router();
var Auth = require('./../config/auth0')
const { requiresAuth } = require('express-openid-connect');
// router.use(Auth)

/* GET users listing. */
router.get('/', requiresAuth(), function (req, res, next) {
  res.status(200).json(req.user);
});

module.exports = router;
