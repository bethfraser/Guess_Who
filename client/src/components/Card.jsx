var React = require('react');

var Card = React.createClass({

  getInitialState: function(){
    return { faceUp: true }
  },

  turnCard: function(e){
    var card = e.target.parentElement;
    if(card.className == "flipped"){
      card.className = "unflipped";
    }else{
      card.className = "flipped";
    }
  },

  render: function(){


    return(

      <section className="container">
      <div id="card" className="unflipped" onClick={this.turnCard}>
      <figure className="card-front" style={{backgroundImage: "url('" + this.props.characteristics.imageUrl + "')"}}></figure>
      <figure className="card-back"></figure>
      </div>
      </section>

      )
  }
});


module.exports = Card;