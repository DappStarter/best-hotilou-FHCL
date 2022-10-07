require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food manage riot pizza mistake inside light army gather'; 
let testAccounts = [
"0x51be88ae5d862064e258b5361e866dd2dea7180d0b0d5ed39de2f7038c05157b",
"0xa6f8bcc16cfdbc6475bfe089dc14e73bd9f8fe69fe8331f8f801e21cb1431c7f",
"0x8b4bc1c126ba092241e658b7a64c9ae4ff225f232ca129d81f2442f88513cf4f",
"0x6328303f7103eb7aee9bc5c1579ef40f96a977a42178e080b19cb344a002bbf7",
"0xcf987d5429965707433b2f5fda045431381364c5888608fa69d207f21d30a112",
"0x11911d1a2677751ae9d42c92b4f694ef231c3090ec5169a112f054cf6a83275c",
"0x157e8cbc06206c069d85bd0fe12d01accd941756da204025a22153932bd75851",
"0xd152ddfe8ebaf8aa8108a7f65c49544f859444f7d4c015a827eda70eeeae3b6f",
"0x28a0e7e3bf9f834661479c5b81d967fe1426d9572df288df1676ccee0560fdc6",
"0x02ca3b7cf1d675430d46af5798368c5650e98d525f3d2e6bfb7fef7d978059fe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


