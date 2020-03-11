var express = require('express');
var CognitoExpress = require("cognito-express")
var router = express.Router();

const cognitoExpress = new CognitoExpress({
  region: "us-east-1",
  cognitoUserPoolId: "us-east-1_ycSXZOTTM",
  tokenUse: "access", //Possible Values: access | id
  tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
})

router.use(function (req, res, next) {
  //I'm passing in the access token in header under key accessToken
  let accessTokenFromClient = req.headers.accesstoken;
  //Fail if token not present in header. 
  if (!accessTokenFromClient) return res.status(401).send("Access Token missing from header");
  cognitoExpress.validate(accessTokenFromClient, function (err, response) {
    //If API is not authenticated, Return 401 with error message. 
    if (err) return res.status(401).send(err);
    //Else API has been authenticated. Proceed.
    req.user = response;
    next();
  })
});

/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.status(200).json(req.user);
});

module.exports = router;
