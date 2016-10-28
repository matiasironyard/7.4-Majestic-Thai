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
          <div className="col-md-4 order-col">
            <h4 className="menu">Order</h4>
            <ul className="order-list-view">
              <li className="order-item-view">food</li>
              <li className="order-item-view">food</li>
              <li className="order-item-view">food</li>
              <li className="order-item-view">food</li>
            </ul>
            <div className="order-total-view">
              total
            </div>
          </div>
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
