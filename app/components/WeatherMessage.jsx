var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function (){
//     var city = this.props.city;
//     var temparature = this.props.temparature;
//     return (
//       <p>The temparature in {city} is: {temparature}</p>
//     );
//
//   }
// });

var WeatherMessage = (props) => {
  var {city, temparature} = props;
  return (
    <p>The temparature in {city} is: {temparature}</p>
  );
};

module.exports = WeatherMessage;
