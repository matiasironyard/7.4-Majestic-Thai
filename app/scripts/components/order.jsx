var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var CheckoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    this.props.currentOrders.each(function(order){
      order.save()
    });
  },
render: function(){
  var OrderedDishes = this.props.currentOrders.map(function(item){
    var dish = item.get('dish');
    var price = item.get('price');
    return(
      <div key={item.cid}>
        <span>{dish}</span><span>{price}</span>
      </div>
    )
  });
  // var prices = OrderedDishes.map(function(item){
  //   return item.get('price');
  // });
  // var convertedPrices = prices.map(Number);
  // console.warn(convertedPrices);
  var total = this.props.currentOrders.reduce(function(previous, currentDish){
    previous = Number(previous)
    currentDish = Number(currentDish.get('price'))
    return previous + currentDish;
  },0)
  return(
    <div className="col-md-12 order-col">
      <h4 className="menu">Order</h4>
      <ul className="order-list-view">
        {OrderedDishes}
      </ul>
        <span>Total: {total.toFixed(2)}</span><button type="submit" onClick={this.handleSubmit}>Place Your Order</button>
  </div>
  );
}
});



module.exports = {
  CheckoutComponent: CheckoutComponent
}
