// https://eth-goerli.g.alchemy.com/v2/bFPCBRHQMgOWaMCSweBv_l-Df9EI5RB9

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/bFPCBRHQMgOWaMCSweBv_l-Df9EI5RB9',
      accounts: ['3fa4636c03a052366ed0e70fd94a8fad074f934dd0fdc780f9a28d311ae8b209']
    }
  }
}