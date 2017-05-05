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
    <h3 className="text-center">The temparature in {city} is: {temparature}</h3>
  );
};

module.exports = WeatherMessage;
