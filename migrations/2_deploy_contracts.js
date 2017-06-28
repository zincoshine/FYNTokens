var SafeMath = artifacts.require('./SafeMath.sol');
var Wallet = artifacts.require('./Wallet.sol');
var Token = artifacts.require("./Token.sol");
var owners = ['address-1','address-2','address-3'];
module.exports = function(deployer) {
  deployer.deploy(wallet,owners,);
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, Token);
  deployer.deploy(Token,0,Wallet.deployed().address,24);
};
