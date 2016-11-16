var React = require('react'); // require react
var ListItem = React.createClass({ // most granular or child element
  render: function() { // this.props.text = properties; get property of text from this object
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  }
})


module.exports = ListItem; // export to make available to parent component
