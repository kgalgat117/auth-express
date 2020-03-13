var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/token', function (req, res) {
  let body = {
    "client_id": 'oY45faai4l2bZrgJQMmQ4ezCO6YjWFbf',
    "client_secret": '9C1JxboCOX37H-jrsL7Oxgg_uY-QEhbdEy_v3Kb2kxD_Lzipe3LeibPMSQF9ZSs-',
    "audience": 'https://auth0-test-117.auth0.com/api/v2/',
    "grant_type": 'client_credentials'
  }
  var options = {
    method: 'POST',
    url: 'https://auth0-test-117.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  };
  request(options, function (error, response, body) {
    if (error) {
      res.status(400).json({ error: error })
    } else {
      res.status(200).json({ result: JSON.parse(body) })
    }
  })
})

module.exports = router;
