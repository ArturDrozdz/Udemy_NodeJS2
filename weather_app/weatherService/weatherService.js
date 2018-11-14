/*
** WeatherService.js
*/

const request = require('request');

const API_KEY = '2b8eafc6bd49211530b2d8ceaf708e44'

var weatherService = (lat, lng, callback) => {
    request({
        url: 'https://api.darksky.net/forecast/' +
            API_KEY +
            '/' +
            lat +
            ',' +
            lng,
        json: true
    }, (error, response, body) => {
        if (error)
            callback('Error with DarkSky API');
        else {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }
    });
};

module.exports = {
    weatherService
}