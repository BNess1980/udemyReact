var React = require('react');
var ListJSON = require('./ListJSON.jsx'); // require parent component that nests all others make sure to check path
var ListPOST = require('./ListPOST.jsx');

var Page4 = React.createClass({
  render:function() {
    return(
      <div>
        <h1>Page 4 - Connect with JSON from Express Server, Node & Reflux</h1>
        <ListPOST />
      </div>
    );
  }
});

module.exports = Page4;
