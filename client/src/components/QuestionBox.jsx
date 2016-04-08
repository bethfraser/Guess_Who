var React = require('react');

var QuestionBox = React.createClass({

  questionButtonClick: function(e){
    var chosenOption = document.getElementById("questionSelect").value;
    var answer = document.getElementById("answer");
    if(chosenOption === this.props.opponentCharacter.hairColor){
    answer.innerText = "Yes!";
  }
  else {
    answer.innerText = "No.";
  }
  },

  render: function(){

    return(
      <div>
      Guess a characteristic: 
      <select id="questionSelect">
      <option value="brown">Brown hair</option>
      <option value="blonde">Blonde hair</option>
      <option value="red">Red hair</option>
      <option value="purple">Purple hair</option>
      <option value="black">Black hair</option>
      </select>
      <button onClick={this.questionButtonClick}>Do they have this?</button> 
      <span id="answer"></span>
      </div>
      )
  }
});


module.exports = QuestionBox;