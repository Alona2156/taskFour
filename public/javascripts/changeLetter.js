export function changeLetter(){
  this.letterNum = this.letters[this.currentLetterPos];
  this.currentLetterPos++;
  if (this.currentLetterPos >= this.letters.length) {
    this.currentLetterPos = 0;
  }
  for (var i = this.particles.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.particles[i];
      this.particles[i] = this.particles[j];
      this.particles[j] = temp;
  }
  this.changeLetterTimer = setTimeout(()=>{
    this.changeLetter();
  }, this.timeout);
}
