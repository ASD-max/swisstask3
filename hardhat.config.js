require("@nomicfoundation/hardhat-toolbox");
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

//use configuration-variables in hardhat to set PRIVATE_KEY variable
//const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x043cffeadb4d0326e24c76845cbc1bfd5ded742727a10b16180aa906a503dbe4`], //your private key
    },
  },
};