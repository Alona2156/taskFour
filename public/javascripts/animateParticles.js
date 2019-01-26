export function animateParticles() {
  this.view.ctx.clearRect(0, 0, this.view.canvas.width, this.view.canvas.height);
  this.view.ctx.fillStyle = this.orange;
  this.view.ctx.fillRect(0, 0, this.view.canvas.width, this.view.canvas.height);
  for (var i = 0, num = this.particles.length; i < num; i++) {
    var p = this.particles[i];
    var pDest = this.particlePositions[i];
    if (this.particles.indexOf(p) === this.particlePositions.indexOf(pDest)) {
      if ((p.x).toFixed(4) == (pDest.x).toFixed(4)) {
        pDest.x = p.startX;
        pDest.y = p.startY;
      }
        p.x += (pDest.x - p.x) * 0.08;
        p.y += (pDest.y - p.y) * 0.08;
        p.rotate(this.view.ctx);
    }
    else if (this.particles.indexOf(p) != this.particlePositions.indexOf(pDest)) {
      p.rotate(this.view.ctx);
    }
    p.rotate(this.view.ctx);
  }
}
