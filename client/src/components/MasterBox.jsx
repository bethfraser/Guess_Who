var React = require('react');
var Grid = require('./Grid.jsx');
var characters = require('../data/characters.json');

var MasterBox = React.createClass({

  getInitialState: function(){
    console.log(characters);
    return { characters: characters, opponentCharacter: null, won: false };
  },

  componentDidMount: function(){

  },

  render: function(){
    return(
      <div>
      <h3>Master Box</h3>
      <Grid characters={this.state.characters}></Grid>
      </div>
      );
  }
});

module.exports = MasterBox;