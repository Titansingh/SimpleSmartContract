
var contractABI = [];
var contractAAddress = '0x2216ECf2821Ea04c2689A1E998909df6AeCf5810';
let web3 = new Web3('http://localhost:7545');

var SimpleSmartContract = new web3.eth.Contract(contractABI, contractAAddress); //return the contract with 

console.log(SimpleSmartContract);//console the contract

web3.eth.getAccounts()//get all account on blockchain return array
.then(console.log);