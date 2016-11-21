var React = require('react');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
  render:function() {
    return(
      <div className="sol-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <EmailField />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
