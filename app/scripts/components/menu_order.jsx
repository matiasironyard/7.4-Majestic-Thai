var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
require('../router').router;

var DishesCollection = require('../models/menu').DishesCollection;
var TemplateComponent = require('./template.jsx').TemplateComponent;


var MenuListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getDefaultProps: function(){
    var collection = new DishesCollection();
    return {
      collection: collection
    }
  },
  componentWillMount: function(){
    this.props.collection.fetch();
  },

  // handleClick: function(e){
  //   e.preventDefault();
  //
  // },

  render: function(){
    var listOfDishes = this.props.collection.map(function(dish){
      return <li className="dishes" key={dish.get('_.id') || dish.cid} >
        <span>{dish.get('dish')}</span><span>{dish.get('description')}</span><span>{dish.get('price')}</span>
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
