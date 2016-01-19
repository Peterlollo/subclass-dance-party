var TinyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;
TinyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.css("width", "+=15");
  this.$node.css("top", "+=15");
  this.$node.css("left", "+=15");
};