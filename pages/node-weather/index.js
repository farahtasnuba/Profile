let request = require('request');
const argv = require('yargs').argv;


let apiKey = '8862fdf324378bdfbf9dbf6214c4b336';
let city = argv.c || 'sydney';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees celsius in ${weather.name}!`;
    console.log(message);
  }
});