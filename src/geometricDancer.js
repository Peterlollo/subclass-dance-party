var GeometricDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

GeometricDancer.prototype = Object.create(Dancer.prototype);
GeometricDancer.prototype.constructor = GeometricDancer;
GeometricDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var location = this.$node.css('left') + Math.floor(Math.random() * 50) - 25;
  this.$node.animate({
    opacity: +0.25,
    color: 'blue',
    left: location++
  }, 5000);
};