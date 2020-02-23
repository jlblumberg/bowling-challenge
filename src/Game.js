var Game = function() {
  this.rolls = []
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Game.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var session = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      result += getSpecialScore();
      rollIndex += 1;
    } else if (isSpare()) {
      result += getSpecialScore();
      rollIndex += 2
    } else {
      result += getNormalScore();
      rollIndex += 2
    }
  }
  return result;

  function isStrike() {
    return session.rolls[rollIndex] === 10;
  }

  function isSpare() {
    return session.rolls[rollIndex] + session.rolls[rollIndex + 1] === 10;
  }

  function getNormalScore() {
    return session.rolls[rollIndex] + session.rolls[rollIndex + 1];
  }

  function getSpecialScore() {
    return session.rolls[rollIndex] + session.rolls[rollIndex + 1] + session.rolls[rollIndex + 2];
  }

}