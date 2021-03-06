var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');
var Page3 = require('./components/Page3.jsx');
var Page4 = require('./components/Page4.jsx');

var Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route path="/page4" component={Page4} />
    </Route>
  </Router>
);


module.exports = Routes;
