var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var MenuOrderContainer = require('./components/menu_order.jsx').MenuOrderContainer;
var DishesCollection = require('./models/menu.js').DishesCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'order/': 'order',
  },

  initialize: function (){
      // this.order = '';
  },

index: function(){

console.log(AppRouter);
  ReactDOM.render(
    React.createElement(MenuOrderContainer),
    document.getElementById('app')
  );
},
});

var router = new AppRouter();

module.exports = router;
