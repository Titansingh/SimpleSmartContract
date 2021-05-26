const HelloWorld = artifacts.require("HelloWorld");//name of contact not contract file name eg simpl.sol


module.exports = function (deployer) {
    deployer.deploy(HelloWorld);
  }