const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// fixed size
canvas.width = 400;
canvas.height = 300;

// draw a red rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);

// draw text
ctx.fillStyle = 'white';
ctx.font = '20px sans-serif';
ctx.fillText('Canvas works!', 60, 200);
