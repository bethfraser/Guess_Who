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
        if(request.stats === 200){
          var characters = JSON.parse(request.responseText);
          this.setState({characters: characters});
        }
      }

      request.send(null);
      chooseCharacter();
  },

  chooseCharacter: function(){

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