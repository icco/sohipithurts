Crafty.init(800, 600, 'game');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 900, h: 10})
  .color('green');

guy = Crafty.e('2D, Canvas, Color, Fourway, Gravity, Guy')
  .attr({x: 0, y: 0, w: 50, h: 50})
  .color('#F00')
  .fourway(4)
  .gravity('Floor');

Crafty.viewport.follow(guy, 0, 0);
