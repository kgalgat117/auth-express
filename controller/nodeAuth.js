var constants = require('./../config/constants')
var auth0 = require('auth0')

var AuthenticationClient = auth0.AuthenticationClient

var authenticationClient = new AuthenticationClient({
    clientId: constants.clientId,
    clientSecret: constants.clientSecret,
    domain: constants.domain
})
var authenticationClientToken = null
var password = 'Password#123'
// setAuthenticationClientToken()
// userCreate()
userSignIn()

function userSignIn() {
    return new Promise((resolve, reject) => {
        let user = 'testuser6'
        authenticationClient.passwordGrant({
            username: user,
            password: password,
            realm: 'Username-Password-Authentication'
        })
            .then(response => {
                console.log(response)
                resolve(response)
            }).catch(err => {
                reject(err)
            })
    }).catch(e => {
        console.log(e)
    })
}

function userCreate() {
    return new Promise((resolve, reject) => {
        let user = 'testuser6'
        authenticationClient.database.signUp({
            email: `${user}@gmail.com`,
            username: user,
            password: 'Password#123',
            connection: 'Username-Password-Authentication',
            user_metadata: {
                
            }
        }).then(response => {
            console.log(response)
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    }).catch(e => {
        console.log(e)
    })
}













function setAuthenticationClientToken() {
    return new Promise((resolve, reject) => {
        authenticationClient.clientCredentialsGrant({
            audience: `https://${constants.domain}/api/v2/`
        }, function (err, response) {
            if (err) {
                reject(err)
            } else {
                authenticationClientToken = response.access_token
                resolve(response)
            }
        })
    })
}






