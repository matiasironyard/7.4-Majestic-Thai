var Backbone = require('backbone');

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
  Order: Order,
  OrdersCollection: OrdersCollection,
};
