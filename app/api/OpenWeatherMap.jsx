var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=22e4e610bbe19558c7438c9c5ff813c2';
//22e4e610bbe19558c7438c9c5ff813c2
module.exports = {
  getTemparature: function (location){
    var encodedLocation  = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
    });
  }
}
