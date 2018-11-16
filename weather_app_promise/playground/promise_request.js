const request = require ('request');

const API_KEY = '9t1Txy49cMatFAsD0ecfC8xGenpwS9uU';

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAdress = encodeURIComponent(address);
        request({
            url: 'http://www.mapquestapi.com/geocoding/v1/address?' +
            'key=' + API_KEY +
            '&location=' + encodedAdress,
            json: true
        }, (error, response, body) => {
            if (error)
                reject('Unable to fetch API');
            else {
                var coord = {
                    street: body.results[0].locations[0].street,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                };
                resolve(coord);
            }
        });
    });  
};

geocodeAddress('19146').then((coord) => {
    console.log(JSON.stringify(coord, undefined, 2));
    console.log('HELLO');
}, (errorMessage) => {
    console.log(errorMessage);
    console.log('butterfly');
    
});
