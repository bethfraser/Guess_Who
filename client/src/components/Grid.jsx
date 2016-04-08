var React = require('react');
var Card = require('./Card.jsx');

var Grid = React.createClass({

  render: function(){

    var cards = [1, 2, 3, 4, 5, 6];

  

    var cardList = cards.map(function(card, index){
      return(
        <Card characteristics={this.props.character}></Card>
      );
    })




    return(
      <div>
      {cardList}
      </div>
      )
  }
});


module.exports = Grid;