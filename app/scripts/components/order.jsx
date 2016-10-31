var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var CheckoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      dish: '',
      price: '',
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    // this.setState();
    this.props.currentOrders.each(function(order){
      order.save()
    });
  },
render: function(){
  var OrderedDishes = this.props.currentOrders.map(function(item){
    var dish = item.get('dish');
    var price = item.get('price');
    return(
      <li key={item.cid}>
        <div className="checkout-dish">{dish}</div><div className="checkout-price">${price}</div>
      </li>
    )
  });
  // var prices = OrderedDishes.map(function(item){
  //   return item.get('price');
  // });
  // var convertedPrices = prices.map(Number);
  // console.warn(convertedPrices);
  var subtotal = this.props.currentOrders.reduce(function(previous, currentDish){
    previous = Number(previous)
    currentDish = Number(currentDish.get('price'))
    return previous + currentDish;
  },0)
  var tax = subtotal * (6/100)

  var total = subtotal + tax
  return(
    <div className="orctive-order">
      <h4 className="order-pane-title">Your Order</h4>
      <ul className="order-list-ul">
        {OrderedDishes}
      </ul>
        <div className="checkout-subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
        <div className="checkout-tax">Tax (6%): ${tax.toFixed(2)}</div>
        <div className="checkout-total">Total: ${total.toFixed(2)}</div><button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Place Your Order</button>
  </div>
  );
}
});

module.exports = {
  CheckoutComponent: CheckoutComponent
}
