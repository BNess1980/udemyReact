var React = require('react'); // require react
var ListItem = require('./ListItem.jsx'); // put the extension beacuse its jsx otherwise interpreted as js
var Reflux = require('reflux'); // require flux for event system pub/sub
var Actions = require('../reflux/actions.jsx'); // actions to notify/broadcast event system
var IngredientStore = require('../reflux/ingredients-store.jsx'); // stores current data to be published to all components listening to

/* ***This file requires simple-express-server-master to server mock back end data**** */

var ListJSON = React.createClass({
  mixins:[Reflux.listenTo(IngredientStore, 'onChange')], // Mixin creates listener to which store file has data

  getInitialState: function() {
      return {ingredients:[]};
  },

  componentWillMount: function() {
    Actions.getIngredients(); // Calls ingredients-store.jsx and uses promise to get data
  },

  onChange: function(e, ingredients) {
    this.setState({ingredients: ingredients})
  },

  render: function() {
      // map each ingredient retuning a ListItem child component with id & text of item
      var listItems = this.state.ingredients.map(function(item) {
        return <ListItem key={item.id} text={item.text} />;
      });

      return(<ul>{listItems}</ul>); // return ul parent of iterating each listItem object as LI

  }
});

module.exports = ListJSON; // export parent component
