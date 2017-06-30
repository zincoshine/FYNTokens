require('babel-polyfill');
var Token = artifacts.require("./Token.sol");
var expect = require("chai").expect;
var token;
//var tokenAddress = "0xaec6593c41491e790af6d85178c9c25c97c07789";
contract('Token', function(accounts) {

  it("test for adding valid milestone", async function() {
    var expected = 1;
    token = await Token.deployed();
    await token.addMilestone(1,30);
    var total = await token.totalMilestones();
    expect(parseInt(total.valueOf())).to.equal(expected);
  });
  it("test for adding invalid milestone", async function() {
    try {
      var expected = 1;
      await token.addMilestonel(0,101);
      var total = await token.totalMilestones();
    }catch(e) {
      expect(e).not.to.equal('');
    }
  });

  it("test for withdrawal", async function() {
    try {
      var expected = 1;
      await token.withdrawFunds.call(1);
    }catch(e) {
      expect(e).not.to.equal('');
    }

  });

  it("test for refund", async function() {
    try {
      var expected = 1;
      await token.refund(1,{from:accounts[1]});
    }catch(e) {
      expect(e).not.to.equal('');
    }
  });
});
