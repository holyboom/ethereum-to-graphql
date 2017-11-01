import React from 'react'
import { request } from 'graphql-request'
import Web3 from 'web3'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
    this.web3 = new Web3(this.web3Provider)

    this.state = {
      coinbase: this.web3.eth.coinbase
    }
  }

  // When view is ready
  componentDidMount = async () => {
    // We'll make request to this endpoint
    const uri = 'http://localhost:4000/graphql'

    // With this query
    const query = `
    {
      getBalanceInEth(addr: "${this.state.coinbase}") {
        value {
          string
        }
      }
    }
    `

    // Now we fetch data...
    const { getBalanceInEth } = await request(uri, query).catch(err => console.error(err))
    const eth = getBalanceInEth.value.string

    // Then set state
    this.setState({ eth })
  }

  render () {
    // loading
    if (!this.state.eth) return <p>loading...</p>

    // success
    return <p>getBalanceInEth : {this.state.eth}</p>
  }
}

export default App
