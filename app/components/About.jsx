var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) =>{
  return (
    <div>
        <h1 className="text-center">About Component</h1>
        <p>This an application build completely using React.</p>
        <p>Here are some of the tools I've used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">OpenWeatherMap</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
    </div>

  )
};

module.exports = About;
