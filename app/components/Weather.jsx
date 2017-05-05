var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handelSearch: function (location){
    this.setState({isLoading: true});
    var that = this;
    OpenWeatherMap.getTemparature(location).then(function (temp){
      that.setState({
        isLoading: false,
        result: temp,
        city: location
      });
    }, function (errorMessage){
      that.setState({
        isLoading: false,
        result: '',
        city: ''
      });
      alert(errorMessage);
    });

  },
  render: function () {
    var {isLoading, result, city} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(result && city){
        return <WeatherMessage city={city} temparature={result} />;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch = {this.handelSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
