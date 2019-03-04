'use strict'

const cookies = require('../data/cookies.json')

function getCookies(cookieId) {
    if (!cookieId)
        return cookies

    const cookie = cookies.find((cookie) => {
        return cookie.id == cookieId
    })

    if (cookie)
        return cookie

    throw new Error('The cookie you requested was not found')
}

module.exports = getCookies
