/*
** Geocode.js
*/

const request = require('request');

const API_KEY = '9t1Txy49cMatFAsD0ecfC8xGenpwS9uU';

var geocodeAdress = (adress, callback) => {
    var encodedAdress = encodeURIComponent(adress)
    request({
        url: 'http://www.mapquestapi.com/geocoding/v1/address?' +
            'key=' + API_KEY +
            '&location=' + encodedAdress,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to fetch location API');
        }
        else {
            callback(undefined, {
                street: body.results[0].locations[0].street,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
};

module.exports = {
    geocodeAdress
}