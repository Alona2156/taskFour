export function rotate(ctx) {
    ctx.fillStyle = this.white;
    ctx.save();
    ctx.translate(this.x, this.y);
    var time = new Date();
    ctx.rotate(this.x/20 * this.random + ((2*Math.PI)/2.5)*time.getSeconds() + ((2*Math.PI)/2500)*time.getMilliseconds());
    ctx.beginPath();
    ctx.arc(-1, -1, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}
