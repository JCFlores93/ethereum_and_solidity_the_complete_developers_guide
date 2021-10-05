// deploy code will go here
const HDWalletProvider = require("truffle-hdwallet-provider")
const Web3 = require("web3")
const { interface, bytecode } = require("./compile")

const provider = new HDWalletProvider(
    "torch powder salmon bunker sense snap practice soul spend wish fat cat",
    "https://rinkeby.infura.io/v3/331f0007e2344c4199a49919b8dba5e9"
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log("Attempting to deploy from account", accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000', gasPrice: '5000000000',})
    console.log(interface)
    console.log("Contract deployed to", result.options.address)
}

deploy()