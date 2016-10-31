var Backbone = require('backbone');

var Dish = Backbone.Model.extend({
  defaults: {
    dish: '',
    description: '',
    price: '',
  }
});

var DishesCollection = Backbone.Collection.extend({

  model: Dish,
  url: "https://tiny-lasagna-server.herokuapp.com/collections/mmthaimenu",

});


var Order = Backbone.Model.extend({
  defaults: {
    idAttribute: '_id'
  }
});

var OrdersCollection = Backbone.Collection.extend({
  model: Order,
  url: "https://tiny-lasagna-server.herokuapp.com/collections/mmthaiorders"
});


module.exports = {
  Dish: Dish,
  DishesCollection: DishesCollection,
  Order: Order,
  OrdersCollection: OrdersCollection,
};
