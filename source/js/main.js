Crafty.init(500,350, document.getElementById('game'));

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 250, h: 10})
    .color('green');

    Crafty.e('2D, Canvas, Color, Fourway, Gravity')
      .attr({x: 0, y: 0, w: 50, h: 50})
    .color('#F00')
      .fourway(4)
    .gravity('Floor');
