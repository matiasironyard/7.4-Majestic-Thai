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



module.exports = {
  kitchenComponent: kitchenComponent,
}
