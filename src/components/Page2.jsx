var React = require('react');
var ListManager = require('./ListManager.jsx'); // require parent component that nests all others make sure to check path


var Page2 = React.createClass({
  render:function() {
    return(
      <div>
        <h1>Page 2 - Xmas List</h1>
        <ListManager title="Christmas List" headingColor="#990000" />
      </div>
    );
  }
});

module.exports = Page2;
