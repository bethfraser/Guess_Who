var winChecker = {
  checkForWin: function(guessedName, chosenCharacter){
    if(guessedName === chosenCharacter.Name){
      return true;
    }
    return false;
  }

}

module.exports = winChecker;