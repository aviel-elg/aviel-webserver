const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a2750c704479fefa55afcc43f92166bb/' + latitude + ',' + longitude + '?units=auto'
    request({url, json: true}, (error, {body}) => {
        if ( error ) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.error) {
            callback('Unable to find location, Try another search', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out, with a high of ' + body.daily.data[0].temperatureHigh + ' and low of ' + body.daily.data[0].temperatureLow + '.There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast