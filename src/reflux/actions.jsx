// This is how you use Reflux; an independent events pub/sub system used by react
// An Action signifies to change the data(think CRUD operations) sending it to a store file which interacts with component
var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'getIngredients', // Creat actions names that will be listened bt store
  'postIngredients'
]);

module.exports = Actions;
