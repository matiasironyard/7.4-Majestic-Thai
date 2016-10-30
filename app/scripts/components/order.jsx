var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var CheckoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
  },
render: function(){
  var OrderedDishes = this.props.currentOrders.map(function(item){
    var dish = item.get('dish');
    var price = parseInt(item.get('price'));
    return(
      <div key={item.cid}>
        <span>{dish}</span><span>{price}</span>
      </div>
    )
  }).reduce(function(previous, currentDish){
    return previous +=currentDish.get('price');
  },0);
  // var prices = OrderedDishes.map(function(item){
  //   return item.get('price');
  // });
  // var convertedPrices = prices.map(Number);
  // console.warn(convertedPrices);
  // var total = this.props.currentOrders.reduce(function(previous, currentDish){
  //   return previous +=currentDish.get('price');
  // },0)
  return(
    <div className="col-md-4 order-col">
      <h4 className="menu">Order</h4>
      <ul className="order-list-view">
        {OrderedDishes}
      </ul>
        <span>Total:</span><button type="submit" onClick={this.handleSubmit}>Place Your Order</button>
  </div>
  );
}
});



module.exports = {
  CheckoutComponent: CheckoutComponent
}
