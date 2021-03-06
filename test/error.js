var before = false, after = false;

it('runs before a failing test', function(){
  before = true;
});

it('asserts false', function(done){
  expect(true).to.be.false;
});


it('fails', function(){
  expect(before).to.be.true;

  fail++;
});

it('fails again', function(){
  expect(before).to.be.true;
  again++;
});


it('runs after a failing test', function(){
  expect(before).to.be.true;
  after = true;
});
