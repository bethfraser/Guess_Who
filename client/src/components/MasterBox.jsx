var React = require('react');
var Grid = require('./Grid.jsx');
var QuestionBox = require('./QuestionBox.jsx');
var GuessBox = require('./GuessBox.jsx');
var winChecker = require('../models/win_checker.js');

var MasterBox = React.createClass({

  getInitialState: function(){
    return { characters: [], opponentCharacter: null, won: false };
  },

  sendHTTPRequest: function(url){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if(request.status === 200){
        var characters = JSON.parse(request.responseText);
        this.setState({characters: characters[0].characters});
        this.chooseCharacter(characters[0].characters);
      }
    }.bind(this);

    request.send(null);
  },

  componentDidMount: function(){
    this.sendHTTPRequest(this.props.url);
  },

  chooseCharacter: function(characters){
    var chosenCharacter = characters[Math.floor(Math.random() * (characters.length-1))];
    this.setState({opponentCharacter:chosenCharacter})
  },

  changeDeck: function(){
    var selectedDeck = document.getElementById("deckSelect").value;
    this.sendHTTPRequest("/api/characters/" + selectedDeck)
  },

  render: function(){
    return(
      <div className="main">
        <img src="/images/logo.png"/><br /> 
        Change deck: 
        <select id="deckSelect" onChange={this.changeDeck}>
        <option value="staff">CodeClan Staff</option>
        <option value="lotr">Lord of The Rings</option>
        </select>
        <Grid characters={this.state.characters}></Grid>
        <QuestionBox characters={this.state.characters} opponentCharacter={this.state.opponentCharacter}></QuestionBox>
        <GuessBox characters={this.state.characters} winChecker={winChecker} opponentCharacter={this.state.opponentCharacter}></GuessBox>
      </div>
      );
  }
});

module.exports = MasterBox;