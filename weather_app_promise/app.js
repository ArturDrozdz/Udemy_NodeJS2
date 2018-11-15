/*
** App.js 
*/

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'adress',
            describe: 'Adress to fetch weather for',
            string: true
        }
}).help().alias('help', 'h').argv;

const API_KEY_COORD = '9t1Txy49cMatFAsD0ecfC8xGenpwS9uU';
const API_KEY_WEATHER = '2b8eafc6bd49211530b2d8ceaf708e44';

var encodedAdress = encodeURIComponent(argv.adress)
var geocodeUrl = 'http://www.mapquestapi.com/geocoding/v1/address?' +
                'key=' + API_KEY_COORD +
                '&location=' + encodedAdress;

axios.get(geocodeUrl).then((response) => {
    var weather =  'https://api.darksky.net/forecast/' + API_KEY_WEATHER + '/' + response.data.results[0].locations[0].latLng.lat + ',' + response.data.results[0].locations[0].latLng.lng;
    console.log(weather);
    return axios.get(weather).then((response) => {
        console.log(response.data.currently.temperature);
    });
}).catch((errorMessage) => {
    console.log(errorMessage);
});