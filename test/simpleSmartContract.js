const { assert } = require("node:console");

const SimpleSmartContract = artifacts.require('SimpleSmartContract');
const HelloWorld = artifacts.require('HelloWorld');

contract('SimpleSmartContract', () => {
 it('Should deploy smart contract properly', async () => {
     const simpleSmartContract = await SimpleSmartContract.deployed();
     //console.log(simpleSmartContract.address);
     assert(simpleSmartContract.address !== '');
 });
});

contract('HelloWorld', () => {
    it('Should return hellow world', async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        assert(result === 'hello world');
    });
});