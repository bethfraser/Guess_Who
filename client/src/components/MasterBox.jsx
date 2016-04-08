var React = require('react');
var Grid = require('./Grid.jsx');


var MasterBox = React.createClass({

  getInitialState: function(){
    return { characters: [], opponentCharacter: null, won: false };
  },

  render: function(){
    return(
      <div>
      <h3>Master Box</h3>
      <Grid></Grid>
      </div>
      );
  }
});

module.exports = MasterBox;