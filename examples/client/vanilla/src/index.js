import { request } from 'graphql-request'

const render = html => (document.getElementById('root').innerHTML = html)

// Loading
render('<p>loading...</p>')

// We'll make request to this endpoint
const uri = 'http://localhost:4000/graphql'

// With this query
const query = `
    {
      getBalanceInEth(addr: "0xdfef1681112b3d3c1d409b4897e06e6b00b22322") {
        value {
          string
        }
      }
    }
    `

// Now we fetch data...
request(uri, query).then(({ getBalanceInEth }) => render(`<p>getBalanceInEth : ${getBalanceInEth.value.string}</p>`)).catch(err => console.error(err))
