export function reinit(){
  window.cancelAnimationFrame(self.currentAnimation);
  window.clearTimeout(self.changeLetterTimer);
  window.clearTimeout(self.getPixelsTimer);
  self.particlePositions = [];
  self.particles = [];
  self.currentLetterPos = 0;
  self.init();
}
