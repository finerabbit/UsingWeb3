const PriceConsumerV3 = artifacts.require("./PriceConsumerV3.sol");

module.exports = function (deployer) {
  deployer.deploy(PriceConsumerV3);
};
