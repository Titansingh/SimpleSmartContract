var helloABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];
  var helloAddress = '0x528123E4ec12c69750432e00719B36bbC02692ab';
  let web31 = new Web3('http://localhost:7545');

  var helloWorld = new web3.eth.Contract(helloABI,helloAddress);//make a pointer pointing to the contract on bock chain

  console.log(helloWorld);
document.addEventListener('DOMContentLoaded', () => {
  helloWorld.methods.hello().call()//call funtion of sol smart contract
    .then(result => {
        document.getElementById('hello').innerHTML = result;
    });
})    