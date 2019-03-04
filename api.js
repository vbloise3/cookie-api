'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const getCookies = require('./handlers/get-cookies')


// Define routes
api.get('/', () => 'Welcome to Cookie API')

api.get('/cookies', () => {
    return getCookies()
})
api.get('/cookies/{id}', (request) => {
    return getCookies(request.pathParams.id)
}, {
    error: 404
})



module.exports = api
