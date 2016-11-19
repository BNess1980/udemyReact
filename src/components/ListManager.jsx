var React = require('react'); // require react library
var List = require('./List.jsx'); // put the extension beacuse its jsx otherwise interpreted as js
var ListManager = React.createClass({

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

    var divStyle = {
      marginTop: 10, // pass javascript css object into style attribute tag
    }


    if(this.props.headingColor) {
        var headingStyle = {
          background: this.props.headingColor
        }
    }

    return (
        <div style={divStyle} className="col-sm-4">
          <div className="panel panel-default">
            <div style={headingStyle} className="panel-heading">
              <h3>{this.props.title}</h3>
            </div>
            <div className="row panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="col-sm-9">
                  <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                </div>
                <button id="add-btn" className="btn btn-primary">Add</button>
                <List items={this.state.items} />
              </form>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = ListManager;
