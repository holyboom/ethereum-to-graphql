import { request } from 'graphql-request'
import Web3 from 'web3'

const render = html => (document.getElementById('root').innerHTML = html)

// Loading
render('<p>loading...</p>')

// Web3
this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
this.web3 = new Web3(this.web3Provider)

// We'll make request to this endpoint
const uri = 'http://localhost:4000/graphql'

// With this query
const query = `
    {
      getBalanceInEth(addr: "${this.web3.eth.coinbase}") {
        value {
          string
        }
      }
    }
    `

// Now we fetch data...
request(uri, query).then(({ getBalanceInEth }) => render(`<p>getBalanceInEth : ${getBalanceInEth.value.string}</p>`)).catch(err => console.error(err))
