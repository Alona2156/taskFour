export function init(){
  this.canvas = document.getElementsByTagName('canvas')[0];
  this.ctx = this.canvas.getContext('2d');
  if (window.outerWidth == 0){
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  else {
    this.canvas.width = window.outerWidth;
    this.canvas.height = window.outerHeight;
  }
}
