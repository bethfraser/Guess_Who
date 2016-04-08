var React = require('react');

var Card = React.createClass({

  getInitialState: function(){
    return { faceUp: true }
  },

  render: function(){

    var turnCard = function(event){
      var picture = this.props.characteristics.imageUrl;
      var card = event.target;

      if(this.state.faceUp === true){
      card.style.backgroundImage = "url('http://www.jimknapp.com/Cards/Non-Bicycle_files/image002.jpg')";
      this.setState({ faceUp: false });
      }
      else {
        card.style.backgroundImage = "url('" + picture + "')";
        this.setState({ faceUp: true });
      }
     }.bind(this);

    
    return(

      <div className="card-box" style={{backgroundImage: "url('" + this.props.characteristics.imageUrl + "')", width: "100px", height: "150px", backgroundSize: "cover"}} onClick={turnCard}>
      </div>
      )
  }
});


module.exports = Card;