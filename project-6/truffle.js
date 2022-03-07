const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "804ed69fd55645dbbab55261058394ff";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
//const mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
     provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
     network_id: 3,       // Ropsten's id
     gas: 5500000,        // Ropsten has a lower block limit than mainnet
     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  }
};
