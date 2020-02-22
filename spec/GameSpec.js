describe('Bowling outcome', function () {

  beforeEach(function () {
    game = new Game();
  });

  it('is a gutter game if no points are scored', function () {
    for (i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0)
  });
});