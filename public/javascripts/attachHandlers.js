export function attachHandlers(){
  if (this.listenerAttached !== 1){
    window.addEventListener("resize", self.reinit);
    this.listenerAttached = 1;
  }
  else {
    return;
  }
}
