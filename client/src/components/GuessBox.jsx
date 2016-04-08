var React = require('react');

var GuessBox = React.createClass({

  buttonClick: function(e){
    var chosenCharacter = document.getElementById("guessCharacter").value;
    var winAnswer = document.getElementById("winAnswer");

    if(this.props.winChecker.checkForWin(chosenCharacter, this.props.opponentCharacter)){
      winAnswer.innerText = "You win!!";
    }
    else{
      winAnswer.innerText = "Wrong, try again.";
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
      <span id="winAnswer"></span>
      </div>
      )
  }
});


module.exports = GuessBox;