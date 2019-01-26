import {changeLetter} from './changeLetter.js';
import {makeParticles} from './makeParticles.js';
import {getPixels} from './getPixels.js';
import {init} from './init.js';
import {animateParticles} from './animateParticles.js';
import {rotate} from './rotate.js';
import {attachHandlers} from './attachHandlers.js';
import {reinit} from './reinit.js';

class View {
  init(){
    return init.call(this);
  }
  attachHandlers(){
    return attachHandlers.call(this);
  }
}

class Particle {
  constructor(x, y){
     this.x = x;
     this.y = y;
     if (window.outerWidth < 700 || window.innerWidth < 700){
       this.size = [2.5, 4, 5.5];
     }
     else {
       this.size = [3.5, 5, 6.5];
     }
     this.random = Math.random();
	   this.radius = this.size[Math.floor(Math.random() * this.size.length)];
     this.white = "rgba(255, 255, 255, 0.7)";
     this.startX = canvasView.canvas.width * Math.random();
     this.startY = canvasView.canvas.height * Math.random();
  }
  rotate(ctx) {
    return rotate.call(this, ctx);
  }
}

class Controller {
  constructor(view){
    this.view = view;
    self = this;
    this.particlePositions = [];
		this.particles = [];
    this.particlesNumber = 210;
    this.currentLetterPos = 0;
    this.letters = "VISUALIZATION".split("");
    this.letterNum = "";
    if (window.outerWidth < 700 || window.innerWidth < 700){
      this.gridX = this.gridY = 11;
    }
    else {
      this.gridX = this.gridY = 12;
    }
    this.orange = "rgb(255,88,0)";
    this.timeout = 4500;
    this.currentAnimation = "";
    this.changeLetterTimer = "";
    this.getPixelsTimer = "";
    this.font = 'bold 300px Arial';
  }
  init(){
    this.view.init();
    this.view.attachHandlers();
    this.changeLetter();
    this.getPixels(this.view.canvas, this.view.ctx);
    this.makeParticles(this.particlesNumber, Particle);
    this.animate();
  }
  reinit(){
    return reinit.call(this);
  }
  makeParticles(num, Particle){
    return makeParticles.call(this, num, Particle);
  }
  changeLetter(){
    return changeLetter.call(this);
  }
  getPixels(canvas, ctx) {
    return getPixels.call(this, canvas, ctx);
  }
  animate(){
    self.currentAnimation = window.requestAnimationFrame(self.animate);
    self.animateParticles();
  }
  animateParticles() {
    return animateParticles.call(this);
  }
}

var canvasView = new View();
var canvasController = new Controller(canvasView);

canvasController.init();
