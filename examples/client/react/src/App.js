import React from 'react'
import { request } from 'graphql-request'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  // When view is ready
  componentDidMount = async () => {
    // We'll make request to this endpoint
    const uri = 'http://localhost:4000/graphql'

    // With this query
    const query = `
    {
      getBalanceInEth(addr: "0x48b961d4764cb879514f9f4ee2c051bd31edb203") {
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
