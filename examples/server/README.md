# ethereum-to-graphql-server-example
Working example for `ethereum-to-graphql`

## Run test server
```shell
testrpc
```
> Expected
``shell
EthereumJS TestRPC v4.1.3 (ganache-core: 1.1.3)

Available Accounts
==================
(0) 0x62dfc32cd1a3883f1de8f3a3c96105638912bdd9
(1) 0x46e41cc4d5382d7efbf6f29b38cbf078f5a670c4
(2) 0x5f482d5f9610312678c69ba9878699b74dff0ab0
(3) 0xc4bc5208976c23e6e06bcd29e290bda2effc6a4b
(4) 0x7f339a49fe134fbaf5e0fd96149aeec72048d953
(5) 0x45ea0da8ba1c2f8a9fa23d5d9e71a77e53e4459d
(6) 0xcd4140bc824d7ebcc5a6e7fd931d520bfc0c4bdd
(7) 0xc076d0c75775692ff8a35498e22f32159f1795d2
(8) 0xd1e7f46a531a49eb53ad513497d825f2f402dc89
(9) 0xd9451969347e02b5ac7e43a0621a254a37918fff
```

## Run GraphQL Server
```shell
# Solidity
git clone https://github.com/katopz/ethereum-to-graphql.git
cd ethereum-to-graphql
npm i
npm deploy

# GraphQL
cd examples
open http://localhost:4000/graphql
```

## Example : getBalanceInEth
> Use `addr` from above.
```shell
{
  getBalanceInEth(addr:"0x62dfc32cd1a3883f1de8f3a3c96105638912bdd9"){
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