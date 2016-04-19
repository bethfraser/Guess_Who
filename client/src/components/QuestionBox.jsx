var React = require('react');

var QuestionBox = React.createClass({

  questionButtonClick: function(e){
    var chosenOption = document.getElementById("optionSelect").value;
    var chosenCharacteristic = document.getElementById("questionSelect").value;
    var answer = document.getElementById("answer");
    if(chosenOption === String(this.props.opponentCharacter[chosenCharacteristic])){
      answer.innerText = "Yes!";
    }
    else {
      answer.innerText = "No.";
    }
  },


  populateSelectOptions: function(){
    var selectedCharacteristic = document.getElementById("questionSelect").value;
    var optionSelect = document.getElementById("optionSelect");
    var answer = document.getElementById("answer");
    answer.innerText = "";

    var createOptions = function(options){
      var optionString = "";
      for(var option of options){
        optionString += "<option value='" + option.toLowerCase() + "'>" + option + "</option>";

      }
      return optionString;
    }

    if(selectedCharacteristic == "hairColor"){
      optionSelect.innerHTML = createOptions(["Brown", "Blonde", "Red", "Black", "Purple"]); 
    }
    else if(selectedCharacteristic == "glasses"){
      optionSelect.innerHTML = createOptions(["True", "False"]);
    }
    else if(selectedCharacteristic == "gender"){
      optionSelect.innerHTML = createOptions(["M", "F"]);
    }
    else{
      optionSelect.innerHTML = "<option>Choose an option:</option>"
    }
  },

  render: function(){

    return(
      <div>
      Guess a characteristic: 
      <select id="questionSelect" onChange={this.populateSelectOptions}>
      <option>Choose characteristic:</option>
      <option value="hairColor">Hair colour</option>
      <option value="glasses">Glasses</option>
      <option value="gender">Gender</option>
      </select>
      
      <select id="optionSelect">
      <option>Choose an option:</option>
      </select>

      <button onClick={this.questionButtonClick}>Do they have this?</button> 
      <span id="answer"></span>
      </div>
      )
  }
});


module.exports = QuestionBox;