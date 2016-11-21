var React = require('react'); // require react
var ReactDOM = require('react-dom'); // renders components to the screen
var Routes = require('./routes.jsx');
//var ListManager = require('./components/ListManager.jsx'); // require parent component that nests all others make sure to check path

// Making a ul list with two components: UL = List.jsx LI = ListItem.jsx

// show parent component; find by id
// title is this.props.title in ListManager.jsx

ReactDOM.render(Routes, document.getElementById('main'));
//ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
//ReactDOM.render(<ListManager title="Chirstmas List" headingColor="#990000" />, document.getElementById('christmas'));

// Must compile this code into regular js file in public/js/main.js so that the browser can render dom & components
// in package json use this line in "scripts" to render "start":"watchify src/main.jsx -v -t [babelify -- presets [ react ] -o public/js/main.js]",
// -v "verbose" shows when file was written
// This uses browserify to output a usable file for the browser to get js
