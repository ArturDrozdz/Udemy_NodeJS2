/*
** test
*/

const request = require ('request');

const KEY = WEATHER_APP_KEY = "9t1Txy49cMatFAsD0ecfC8xGenpwS9uU";

var geocodedAdress = (adress, callback) => {
    var encodedAdress = adress;

    request({
        url: 'http://www.mapquestapi.com/geocoding/v1/address?' +
                'key=' + WEATHER_APP_KEY +
                '&location=' + '170%20avenue%20thiers%20lyon%2069006', 
                json: true
    }, (error, response, body) => {
        if (error)
            callback('Unable to connect to MAPQUEST API');
        else if (body.info.statuscode === 0) {
            callback(undefined, {
                adress: body.results[0].locations[0].street,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
};
