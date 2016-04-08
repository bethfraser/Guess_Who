var React = require('react');

var GuessBox = React.createClass({

  buttonClick: function(e){
    var chosenCharacter = document.getElementById("guessCharacter").value;

    if(this.props.winChecker.checkForWin(chosenCharacter, this.props.opponentCharacter)){
        console.log("Win!!");
    }
    else{
      console.log("Try AGAIN");
    }

  },

  render: function(){

    var dropDownOptions = this.props.characters.map(function(character, index){
      return(
        <option value={character.name} key={index}>{character.name}</option>
        )
    });

    return(
      <div>
      <select id="guessCharacter">
      {dropDownOptions}
      </select>
      <button onClick={this.buttonClick}>Guess!</button>
      </div>
      )
  }
});


module.exports = GuessBox;