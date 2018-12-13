function init() {
  const canvas = document.getElementById('demoCanvas');
  resizeCanvas(canvas);

  const stage = new createjs.Stage(canvas);

  const customRect = getCenterPositionedRect(100, 100, 100, 100);
  console.log(customRect.getBounds());
  stage.addChild(customRect);

  createjs.Ticker.addEventListener('tick', () => {
    moveAndRotateShape(customRect, canvas, 5, 1)
    stage.update();
  });

}

function moveAndRotateShape(shape, canvas, velocity, rotation) {
  shape.rotation += rotation;

  // TODO: Come up with how collision might work and
  //       alternatively use Tweenjs.
  if (shape.x + 50 >= canvas.width) {
    shape.x = 0;
  } else {
    shape.x += velocity;
  }
}

function getCenterPositionedRect(x, y, width, height) {
  const shape = new createjs.Shape();
  shape.x = x, shape.y = y;
  shape.regX = width / 2, shape.regY = height / 2;

  shape.graphics.f('black').r(0, 0, width, height);
  shape.setBounds(- width / 2, - height / 2, width, height);
  return shape;
}

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

init();