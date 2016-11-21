var React = require('react');
var LeadCapture = require('./LeadCapture.jsx'); // require parent component that nests all others make sure to check path


var Page3 = React.createClass({
  render:function() {
    return(
      <div>
        <h1>Page 3 - Form</h1>
        <LeadCapture />
      </div>
    );
  }
});

module.exports = Page3;
