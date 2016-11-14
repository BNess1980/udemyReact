var React = require('react'); // require react
var ListItem = React.createClass({ // most granular or child element
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
})

module.exports = ListItem; // export to make available to parent component
