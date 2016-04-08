var React = require('react');
var Grid = require('./Grid.jsx');
// var characters = require('json!../data/characters.json');

var MasterBox = React.createClass({

  getInitialState: function(){

    return { characters: [], opponentCharacter: null, won: false };
  },

  componentDidMount: function(){
    // console.log(characters);
    // var data = characters;
    // this.setState({characters: data})
  },

  render: function(){
    return(
      <div>
      <h3>Master Box</h3>
      <Grid></Grid>
      Guess who??
      </div>
      );
  }
});

module.exports = MasterBox;