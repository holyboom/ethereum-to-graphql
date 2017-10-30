const express = require('express')
const graphqlHTTP = require('express-graphql')
const graphql = require('graphql')

const app = express()
const MetaCoinArtifact = require('../../build/contracts/Metacoin')
const url = 'http://localhost:8545'

const { genGraphQlProperties } = require('../../lib')
const { schema, rootValue } = genGraphQlProperties({ artifacts: [MetaCoinArtifact], provider: { url }, graphql })

// CORS
const cors = require('cors')
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
)

app.listen(4000)
