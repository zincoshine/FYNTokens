var Wallet = artifacts.require('./Wallet.sol');
var Token = artifacts.require("./Token.sol");
var owners = ['0x1a5c95553d4adec744f62fef05e665efeb1e0799','0xb370cc6486ab5ecdb0349665bab7132ce0f4a812','0xb370cc6486ab5ecdb0349665bab7132ce0f4a812'];
var walletAddress;
module.exports = function(deployer) {
  var currentTimestamp = Math.round((new Date()).getTime() / 1000);
  deployer.deploy(Wallet,owners,3,5).then(function() {
    return deployer.deploy(Token,100000,"0x148ce37272ddd46a44b804f9b044997fd5173a0c",currentTimestamp);
    //return deployer.deploy(Token,100000,Wallet.address,currentTimestamp);
  });
};
