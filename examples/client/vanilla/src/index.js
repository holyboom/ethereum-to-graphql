import { request } from 'graphql-request'
import Web3 from 'web3'

const render = html => (document.getElementById('root').innerHTML = html)

// Loading
render('<p>loading...</p>')

// Web3
this.web3 = new Web3()
this.web3.setProvider(new Web3.providers.HttpProvider('http://localhost:9545'))

this.state = {
  coinbase: this.web3.eth.coinbase
}

// We'll make request to this endpoint
const uri = 'http://localhost:4000/graphql'

// With this query
const query = `
    {
      getBalanceInEth(addr: "0x47adc0faa4f6eb42b499187317949ed99e77ee85") {
        value {
          string
        }
      }
    }
    `

// Now we fetch data...
request(uri, query).then(({ getBalanceInEth }) => render(`<p>getBalanceInEth : ${getBalanceInEth.value.string}</p>`)).catch(err => console.error(err))
