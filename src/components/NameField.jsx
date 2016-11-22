var React = require('react');
var NameField = React.createClass({

  getInitialState: function() {
    return {valid:true, value:""}
  },

  onBlur: function(e) {
    var value = e.target.value;
    if(value === '' || value === null || value === undefined) {
      this.setState({valid:false, value:e.target.value});
    } else {
      this.setState({valid:true, value:e.target.value});
    }
  },

  clear: function() {
    this.setState({value:""});
  },

  render:function() {

    var formClass = this.state.valid ? "form-group" : "form-group has-error";

    return(
      <div className={formClass}>
         <label htmlFor={this.props.type +'Name'}>{this.props.type + 'Name'}</label>
         <input id={this.props.type +'Name'} type="email" className="form-control" onBlur={this.onBlur} placeholder={this.props.type + ' Name'} value={this.state.value} />
      </div>
    );
  }
});

module.exports = NameField;
