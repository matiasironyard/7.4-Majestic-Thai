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


module.exports = {
  Dish: Dish,
  DishesCollection: DishesCollection,
};
