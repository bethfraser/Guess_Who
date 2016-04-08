var React = require('react');
var Card = require('./Card.jsx');

var Grid = React.createClass({

  render: function(){

    var cards = [1, 2, 3, 4, 5, 6];

    var testCard = {
         name: "Keith",
         gender: "m",
         hairColor: "brown",
         glasses: false ,
         imageUrl: "http://codeclan.com/assets/grid/keith.JPG" 
    }

    var cardList = cards.map(function(card, index){
      return(
        <Card characteristics={testCard} key={index}></Card>
        )
    }.bind(this))




    return(
      <div>
      {cardList}
      </div>
      )
  }
});


module.exports = Grid;