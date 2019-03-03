'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

api.get('/cookies', () => {
    return [
        'Chocolate Chip',
        'Christmas',
        'Cut-out',
        'Short Bread'
    ]
});

module.exports = api;