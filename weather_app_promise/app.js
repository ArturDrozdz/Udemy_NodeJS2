/*
** App.js 
*/

const yargs = require('yargs');

const geocode = require ('./geocode/geocode');
const weatherService = require ('./weatherService/weatherService');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'adress',
            describe: 'Adress to fetch weather for',
            string: true
        }
}).help().alias('help', 'h').argv;

var coordObj = geocode.geocodeAdress(argv.adress, (errorMessage, results) => {
    if (errorMessage)
        console.log(errorMessage);
    else {
        weatherService.weatherService(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage)
                console.log(errorMessage);
            else {
                console.log(JSON.stringify(weatherResults.temperature, undefined, 2));
            }
        });
    }
});