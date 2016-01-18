



var BlinkyDancer = function BlinkyDancer(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};


BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  console.log('blinky step');
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};