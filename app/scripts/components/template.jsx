var React = require('react');

var TemplateComponent = React.createClass ({
  render: function(){
    return (
      <div className="container-fluid">
        <div className="menu row">
          <div className="col-md-11 nav-bar-col">
            <a href="#"><div className="facebook"></div></a>
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Events</a></li>
              <li role="presentation"><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-12 header-col">
            <div className="header-title">
              <h1 className="restaurant-name">Majestic Thai</h1>
              <h3 className="subtitle">East Meets West</h3>
              <div className="title-logo"></div>
            </div>
          </div>
          <div className="col-md-offset-1 col-md-10 menu-col">
          {this.props.children}
          </div>
        </div>
        <div className="col-md-12-fluid footer">
          <span className="footer-title">Majestic Thai </span><span>100 Main Street, Spartanburg, SC, 29302 | (864) 898-9999</span>
        </div>
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
};
