const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const sprite = new Image();
sprite.js = 'js.png;
sprite.onload = () => {
  requestAnimationFrame(gameLoop);
};

const FRAME_W = 32, FRAME_H = 32;
let frame = 0, lastTime = 0;

function gameLoop(ts) {
  if (ts - lastTime > 200) {
    frame = (frame + 1) % 4; 
    lastTime = ts;
  }
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(
    sprite,
    frame * FRAME_W, 0, FRAME_W, FRAME_H,
    (canvas.width-FRAME_W)/2, (canvas.height-FRAME_H)/2,
    FRAME_W, FRAME_H
  );
  requestAnimationFrame(gameLoop);
}

