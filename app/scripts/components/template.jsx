var React = require('react');

var TemplateComponent = React.createClass ({
  render: function(){
    return (
      <div className="container">
        <div className="menu row">
          <div className="col-md-8-fluid nav-bar-col">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
            </ul>
          </div>
          <div className="col-md-8-fluid header-col">
            <h1 className="well">Thai Restaurant</h1>
          </div>
          {this.props.children}

        </div>
        <div className="col-md-8-fluid footer">
          FOOTER
        </div>
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
};
