var React = require('react'); // require react
var ListItem = require('./ListItem.jsx'); // put the extension beacuse its jsx otherwise interpreted as js

var List = React.createClass({

  render: function() {

      var createItem = function(text,index) {
        return <ListItem key={index + text} text={text} />;
      };

      return(<ul>{this.props.items.map(createItem)}</ul>); // return ul parent of iterating each listItem object as LI
      // use map function to apply createItem to this.props.items array
  }
});

module.exports = List; // export parent component
