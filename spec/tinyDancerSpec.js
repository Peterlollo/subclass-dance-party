describe("tinyDancer", function() {

  var tinyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tinyDancer = new TinyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(tinyDancer.$node).to.be.an.instanceof($);
  });

})