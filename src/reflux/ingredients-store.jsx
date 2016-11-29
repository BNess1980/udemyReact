var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var listLen;

var IngredientStore = Reflux.createStore({
  listenables: [Actions], // functions in actions.jsx
  getIngredients: function() { // function has to match Action name
    HTTP.get('/ingredients')
    .then(function(json) { // use http service(promise) to retrieve json from local express/node server
      this.ingredients = json;
      this.fireUpdate(); // update data
      listLen = json.length + 1;
      console.log(listLen);
    }.bind(this)); // bind component not function
  },
  postIngredients: function(text) {

    if(!this.ingredients) { // If no ingredients create array
      this.ingredients = [];
    }

    var ingredient = {
      "text": text,
      "id": listLen.toString()
      //, "id": Math.floor(Date.now() / 1000) + text
    }

    this.ingredients.push(ingredient);
    this.fireUpdate();

    // call getIngredients() to refresh data on the server since you've pushed the new
    // ingredient locally above
    // Wihtout this your last ingredient added would not show with the original data
    HTTP.post('/ingredients', ingredient)
      .then(function(resp) {
        this.getIngredients();
    }.bind(this));

  },
  fireUpdate: function() { // updates/refreshes data to all components
    this.trigger('change', this.ingredients); // trigger reserved reflux function to activate "change" listener
  }
});

module.exports = IngredientStore;
