var React = require('react');
var Card = require('./Card.jsx');

var Grid = React.createClass({

  render: function(){
    console.log(this.props)
    var cards = this.props.characters;

    var cardList = cards.map(function(card, index){
      return(
        <Card characteristics={card} key={index}></Card>
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