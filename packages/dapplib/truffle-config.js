require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name riot situate coin grace father foster gift'; 
let testAccounts = [
"0x7ef56734e231a23ec8a8e6acb7b90669d885ebfd07385385c93e61e910533178",
"0x24f8c3232e0b639783bfabb4395b10d526cc7ef1ec7244d00926b019685b888a",
"0xa4e3d682ec9114db52eb2a3b320aa50cd1b1d798bd92a06e7d74b5ac41994ba5",
"0x7f7705a4fdab6ebcb9747321b16ce6c6c21d42081d63e4aeec0365b74bdadc39",
"0x2e8691c021c7c6b8b46127259f7f040edb8228d686267bceb1cfaa7d02e02b3d",
"0x361902232cbaad1871148ff1381223768d432fd423552bd12828778e921772c3",
"0x488d6f601bf362971b12b5a85bd2e86f8a1bc89977ab703b357c0f024a4d73c4",
"0xd87f63cb33a98c20d16ad22b74dfb3bbb268d98ec96df133045a8074ed36ba34",
"0x20b7b6ebd3c3f4c0fccf5b2b0d4b5557c440e49727c277f17455580da3214b38",
"0xfeb9df3b4c2f74f315a778fe209cd82fcfa0dc3519092ba36a7a29b028c54d7e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

