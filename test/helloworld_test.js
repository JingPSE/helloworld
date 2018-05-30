var Browser = require('zombie')
var assert = require('assert')
var app = require('../helloworld')
var server = app.listen();


describe('main page', function() { 
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' })
  })
  before(function(done) {
    this.browser.visit('/', done)
  })
  after(function (done) {
        server.close();
        done();
   })
  it('should say hello world', function() { 
    assert.ok(this.browser.success)
    assert.equal(this.browser.text(), "Hello World")
  })
})
