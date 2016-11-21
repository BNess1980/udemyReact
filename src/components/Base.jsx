var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/*  {this.props.children} For the nested components within this component */

var Base = React.createClass({
    render: function() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <h1 className="brand">Header</h1>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                          <ul className="nav navbar-nav">
                              <li>
                                  <Link to="/">Home</Link>
                              </li>
                              <li>
                                  <Link to="/page1">Page1</Link>
                              </li>
                              <li>
                                  <Link to="/page2">Page2</Link>
                              </li>
                              <li>
                                  <Link to="/page3">Page3</Link>
                              </li>
                          </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="page-header">
                        <h1>Bruce's React Udemy Class</h1>
                    </div>

                    <p className="lead">Component examples from Udemy React Flux course with Mark Price from Devslopes</p>


                        {this.props.children}

                </div>

                <footer className="footer">
                    <div className="container">
                        <small>Footer</small>
                    </div>
                </footer>
            </div>
        );
    }
})

module.exports = Base;
