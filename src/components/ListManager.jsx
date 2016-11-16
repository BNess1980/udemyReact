var React = require('react'); // require react
var List = require('./List.jsx'); // put the extension beacuse its jsx otherwise interpreted as js
var ListManager = React.createClass({ // most granular or child element

  // Everytime a component is rendered this funciton will be called
  // Initializes empty items array
  getInitialState: function() {
    return {items: [], newItemText:""};
  },

  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  },

  // Fucntion scoped to ListManager component
  // press submit button and have items array update with text entered in input
  handleSubmit: function(e) {
    e.preventDefault(); // Prevent default action

    // Create a new object and assign existing state items array to it;
    var currentItems = this.state.items; // state is data that gets mutated; this.props does not get mutated/read-only!

    // every component has state and props
    currentItems.push(this.state.newItemText); // push to new object; state hasn't been modified until below function

    this.setState({items:currentItems,newItemText:""}); // property of a function in React
    // Set items to new array and then reset newItemText as blank otherwise newItemText would repeat the last item

  },

  render: function() { // Set dynamic title with this.props
    // Call scoped function with this.methodName
    return (
        <div>
          <h3>{this.props.title}</h3>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.onChange} value={this.state.newItemText} />
            <button id="add-btn">Add Ingredient</button>
            <List items={this.state.items} />
          </form>
        </div>
    );
  }
});

module.exports = ListManager;
