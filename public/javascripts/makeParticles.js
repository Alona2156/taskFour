export function makeParticles(num, Particle){
  for (var i = 0; i < num; i++) {
    this.particles.push(new Particle(this.view.canvas.width *Math.random(), this.view.canvas.height* Math.random()));
  }
}
