var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({

  onSubmit: function(e) {
    if(!this.refs.fieldEmail.state.valid || !this.refs.firstName.state.valid || !this.refs.lastName.state.valid) {
      alert('Form has errors');
    } else {
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.firstName.state.value,
        lasstName: this.refs.lastName.state.value,
      }
      console.log('This is what we have '+httpRequestBody);

      /*clears text values in fields*/
      this.refs.fieldEmail.clear();
      this.refs.firstName.clear();
      this.refs.lastName.clear();
    }
  },

  render:function() {
    return(
      <div className="sol-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="firstName" /> {/*refs allow you to refer to state from child components within parent*/}
            <NameField type="Last" ref="lastName" />
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
