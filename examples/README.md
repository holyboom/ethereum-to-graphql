# ethereum-to-graphql-example
Working example for `ethereum-to-graphql`

## Run test server
```shell
testrpc
```

## Run GraphQL Server
```shell
npm i
npm build
npm deploy
open http://localhost:4000/graphql
```

## Example : getBalanceInEth
```shell
{
  getBalanceInEth(addr:"0xe2bad9ab8434f93ef0a7a242550a18be5d5d9562"){
    value {
      string
    }
  }
}
```
> Expected
```shell
{
  "data": {
    "getBalanceInEth": {
      "value": {
        "string": "20000"
      }
    }
  }
}
```