const { auth } = require("express-openid-connect");;

var AuthObject = auth({
    required: false,
    auth0Logout: true,
    baseURL: 'https://localhost:3000',
    issuerBaseURL: 'https://auth0-test-117.auth0.com',
    clientID: 'sRynBxaQw4VvGghz1tjyGUat3L7MnEii',
    clientSecret: 'uUx13FHAnZpghvC2JkGBY5tXloX5a14yThi0UGvzcj1Ma_4RMR5wt-vi8duqKt3r',
    appSessionSecret: 'a long, randomly-generated string stored in env',
})

module.exports = AuthObject