var React = require('react');

var GuessBox = React.createClass({

  buttonClick: function(e){
    var chosenCharacter = document.getElementById("guessCharacter").value;
    
    console.log(chosenCharacter)

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