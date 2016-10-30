var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');

require('backbone-react-component');
require('../router').router;

var DishesCollection = require('../models/menu').DishesCollection;
var OrdersCollection = require('../models/menu').OrdersCollection;
var TemplateComponent = require('./template.jsx').TemplateComponent;
var Checkout = require('./order.jsx').CheckoutComponent;


var MenuListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    var currentOrders = new OrdersCollection();
    console.log(currentOrders);
    return {
      currentOrders: currentOrders
    }
  },

// componentWillMount: function(){
//     this.props.ordersCollection.fetch();
//   },

handleDishClick: function(dish){
  var orderDish = dish.toJSON();
  console.log('order dish', orderDish);
  delete orderDish._id
  this.state.currentOrders.add([orderDish]);
  this.setState({currentOrders: this.state.currentOrders});
},

  render: function(){
    var collection = this.getCollection();
    console.log('collection', collection);
    var listOfDishes = collection.map(function(dish){
      // console.log(this.props.collection);
      // console.warn(dish);
      var handleDishClick = this.handleDishClick.bind(this, dish);
      return (
      <li onClick={handleDishClick} className="dishes" key={dish.get('_.id') || dish.cid}>
        <span>{dish.get('dish')}</span><span>{dish.get('description')}</span> <span>{dish.get('price')}</span>
      </li>
    );
  }.bind(this));
    return(
      <div>
        <div className="col-md-offset-1 col-md-6 menu-col">
          <h3 className="menu">Menu</h3>
            <ul>
              {listOfDishes}
            </ul>
        </div>
        <div className="col-md-4 order-col">
          <h4 className="menu">Order</h4>
          <ul className="order-list-view">
            <Checkout currentOrders ={this.state.currentOrders} />
          </ul>
        </div>
      </div>
    );
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

var MenuOrderContainer = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getDefaultProps: function(){
    var collection = new DishesCollection();
    collection.fetch();
    return{
      collection: collection
    }
  },
  render: function(){
    return(
      <TemplateComponent>
        <MenuListing/>
      </TemplateComponent>

    )
  }
});

module.exports={
  MenuOrderContainer:MenuOrderContainer,
}
