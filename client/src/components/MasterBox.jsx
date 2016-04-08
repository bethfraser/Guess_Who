var React = require('react');
var Grid = require('./Grid.jsx');

var MasterBox = React.createClass({

  getInitialState: function(){
    return { characters: [], opponentCharacter: null, won: false };
  },

  componentDidMount: function(){
      var request = new XMLHttpRequest();
      request.open('GET', this.props.url);
      request.onload = function(){
        if(request.status === 200){
          var characters = JSON.parse(request.responseText);
          this.setState({characters: characters[0].characters});
          this.chooseCharacter(characters[0].characters);
        }
      }.bind(this);

      request.send(null);
  },

  chooseCharacter: function(characters){
    var chosenCharacter = characters[Math.floor(Math.random() * (characters.length-1))];
    this.setState({opponentCharacter:chosenCharacter})
  },

  render: function(){
    return(
      <div>
      <h3>Master Box</h3>
      <Grid characters={this.state.characters}></Grid>
      Guess who??
      </div>
      );
  }
});

module.exports = MasterBox;