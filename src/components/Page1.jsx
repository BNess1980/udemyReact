var React = require('react');
var ListManager = require('./ListManager.jsx'); // require parent component that nests all others make sure to check path


var Page1 = React.createClass({
  render:function() {
    return(
      <div>
        <h1>Page 1 - Ingredients List</h1>
        <ListManager title="Ingredients" />
      </div>
    );
  }
});

module.exports = Page1;
