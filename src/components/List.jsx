var React = require('react'); // require react
var ListItem = require('./ListItem.jsx'); // put the extension beacuse its jsx otherwise interpreted as js
var ingredients = [{"id":1,"text":"ham"},{"id":2,"text":"cheese"},{"id":3,"text":"bologna"}]; // Sample json fake data source

var List = React.createClass({
  render: function() {
      var listItems = ingredients.map(function(item) { // map each ingredient object to listItem object
        return <ListItem key={item.id} ingredient={item.text} />;
      });
      return(<ul>{listItems}</ul>); // return ul parent of iterating each listItem object as LI
  }
});

module.exports = List; // export parent component
