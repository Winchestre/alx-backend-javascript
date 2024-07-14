const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  it('should return status code 200', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('should return correct result', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
