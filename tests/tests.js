var assert = require('assert');
var math = require('../routes/math.js');
var request = require('supertest');
var app = require('../app');

describe('Math API Tests', function() {
/*Unit Test*/
  describe('Add Two Numbers', function() {
    it('two plus three is five', function() {
      assert.equal(math.add(2,3 ),5);
    });
  });

/*Integration Test*/
  describe('Add Two Numbers through API', function() {
  it('two plus three is five', function(done) {
    request(app)
    .get('/api/add?n1=2&n2=3')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect(function(res) {
      var answer = res.body;
      assert.equal(answer,5);
    })
    .end(function(err,res) {
      if (err) return done(err);
      done();
    });
  });
});
});
