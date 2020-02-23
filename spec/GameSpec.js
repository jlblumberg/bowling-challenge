describe('Bowling scoring', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  function rollMany(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  it('can handle a gutter game', function () {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it('can handle all ones', function() {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function() {
    game.roll(5);
    game.roll(5); // spare
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toEqual(16);
  });

  it('can roll a strike', function() {
    game.roll(10); // strike, ends frame
    game.roll(3);
    game.roll(4); // end second frame
    rollMany(0, 16)
    expect(game.score()).toEqual(24);
  });

  it('can roll a perfect game', function(){
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });

});