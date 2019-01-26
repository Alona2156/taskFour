export function getPixels(canvas, ctx){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var currentLetter = this.letterNum;
  ctx.fillStyle = 'white';
  ctx.font = this.font;
  ctx.fillText(currentLetter, canvas.width / 2 - ctx.measureText(currentLetter).width / 2, canvas.height / 2 + 100);
  var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var buffer32 = new Uint32Array(idata.data.buffer);
  if (this.particlePositions.length > 0) {
    this.particlePositions = [];
  }
  for (var y = 0; y < canvas.height; y += this.gridY) {
    for (var x = 0; x < canvas.width; x += this.gridX) {
      if (buffer32[y * canvas.width + x]) {
        this.particlePositions.push({
          x: x,
          y: y
        });
      }
    }
  }
  this.getPixelsTimer = setTimeout(()=>{
    this.getPixels(canvas, ctx);
  }, this.timeout);
}
