describe("GeometricDancer", function() {

  var geometricDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    geometricDancer = new GeometricDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(geometricDancer.$node).to.be.an.instanceof($);
  });

})