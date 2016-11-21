var React = require('react');
var validator = require('email-validator');
var EmailField = React.createClass({

  getInitialState: function() {
    return {valid:true, value:""}
  },

  onChange: function(e) {
    var value = e.target.value;
    if(!validator.validate(value)) {
      this.setState({valid:false, value:e.target.value});
    } else {
      this.setState({valid:true, value:e.target.value});
    }
  },

  render:function() {

    var formClass = this.state.valid ? "form-group" : "form-group has-error";

    return(
      <div className={formClass}>
         <label htmlFor="email">Email address</label>
         <input id="email" type="email" className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value} />
      </div>
    );
  }
});

module.exports = EmailField;
