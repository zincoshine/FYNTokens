var SafeMath = artifacts.require('./SafeMath.sol');
var Wallet = artifacts.require('./Wallet.sol');
var Token = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  deployer.deploy(wallet);
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, Token);
  deployer.deploy(Token,0,Wallet.deployed().address,24);
};
