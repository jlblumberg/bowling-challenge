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
    if (isSpare()) {
      result += getSpareScore();
    } else {
      result += getNormalScore();
    }
    rollIndex += 2; // next frame
  }
  return result;

  function isSpare() {
    return session.rolls[rollIndex] + session.rolls[rollIndex + 1] === 10;
  }

  function getSpareScore() {
    return session.rolls[rollIndex] + session.rolls[rollIndex + 1] + session.rolls[rollIndex + 2];
  }

  function getNormalScore() {
    return session.rolls[rollIndex] + session.rolls[rollIndex + 1];
  }

}