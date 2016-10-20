$(document).ready(function() {
  // make sure the browser has loaded all of the HTML before js
  'use strict';
  // tells js interpreter to treat code more rigorously
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c;
  for(var x = 25; x < 400; x += 50) {
    for(var y = 25; y < 400; y += 50) {
      c = Shape.Circle(x, y, 20);
      c.fillColor = 'green';
    }
  }

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';

  var tool = new Tool();

  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  };

});
