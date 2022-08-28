// https://eth-goerli.g.alchemy.com/v2/XscGBfOWVu2KDwSYiZsJiEtI6mPA7dcD



require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/XscGBfOWVu2KDwSYiZsJiEtI6mPA7dcD',
      accounts: ['d98a252cdca895a90fb230cf83962b26072259d0f616da07a43059d43909c01d'],
    },
  },
};