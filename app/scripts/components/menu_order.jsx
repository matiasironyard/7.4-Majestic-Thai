var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');

require('backbone-react-component');
require('../router').router;

var DishesCollection = require('../models/menu').DishesCollection;
var TemplateComponent = require('./template.jsx').TemplateComponent;


var MenuListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getDefaultProps: function(){
    var collection = new DishesCollection();
    console.log(collection);
    return {
      collection: collection
    }
  },

componentWillMount: function(){
    this.props.collection.fetch();
  },

handleDishClick: function(item){
  var orderDish = item.toJSON();
  delete orderitem._id
  this.state.orderList.add([orderItem]);
  this.setState({orderList: this.state.orderList});
},

  render: function(){
    var listOfDishes = this.props.collection.map(function(item){
      var handleDishClick = this.handleDishClick.bind(this, item);
      return <li className="dishes" onClick={this.handleDishClick} key={item.get('_.id') || item.cid}>
        <span>{item.get('dish')}</span><span>{item.get('description')}</span><span>{item.get('price')}</span>
      </li>
    });
    return(
      <div className="col-md-offset-1 col-md-6 menu-col">
        <h3 className="menu">Menu</h3>
          <ul>
            {listOfDishes}
          </ul>
      </div>
    )
  }
});

// var OrderCheckout = React.creatClass({
//   mixins: [Backbone.React.Component.mixin],
//
// render: function(){
//   var Order = this.props.collection.map(function(dish)){
//     return <li className="order"></li>
//
//   }
// }
// });





var MenuOrderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return(
      <TemplateComponent>
        <MenuListing/>
      </TemplateComponent>

    )
  }
});



module.exports={
  MenuOrderComponent:MenuOrderComponent,
}
