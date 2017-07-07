# Bitcoin Address
Resource: /address/{address}
Method: GET 
[Ref](https://btc.com/api-doc#地址)

## cURL
REQUEST:
```shell
curl https://chain.api.btc.com/v3/address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew
```
RESPONSE:
```json
{
    "err_no": 0,
    "data": {
        "address": "15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew",
        "received": 13623974334090,
        "sent": 13623874334090,
        "balance": 100000000,
        "tx_count": 6260,
        "unconfirmed_tx_count": 0,
        "unconfirmed_received": 0,
        "unconfirmed_sent": 0,
        "unspent_tx_count": 3,
        "first_tx": "030b7d06d1dcec24d017249b6b87a457bd217150afbbe4351f8821870324d00b",
        "last_tx": "04ffa9c3875b15ceb65c2dd4ee2654c5fb65374123692362e32fac566a6b16aa"
    }
}
```

# Ethereum
Resouce : https://etherchain.org/api/account/:id
Method: GET
[Ref](https://etherchain.org/documentation/api/#api-Accounts-GetAccountId)

## cURL
REQUEST:
```shell
curl https://etherchain.org/api/account/:id
```
RESPONSE:
```json
{
    "status": 1,
    "data": [{
        "address": "0xf90c9ac616ecfefb3860aaa5bc33caf9bc606441",
        "balance": 8451311601385754000,
        "nonce": null,
        "code": "0x",
        "name": null,
        "storage": null,
        "firstSeen": "2016-07-31T00:05:52.000Z"
    }]
}
```

# AntShares
RESOURCE: localhost:10332
METHOD: GET
REQUEST:
```JSON
{
  "jsonrpc": "2.0",
  "method": "getbalance",
  "params": ["025d82f7b00a9ff1cfe709abe3c4741a105d067178e645bc3ebad9bc79af47d4"],
  "id": 1
}
```
RESPONSE:
```JSON
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "balance": "1.01",
    "confirmed": "1.01"
  }
}
```
Response field ：

balance：blance in the wallet.
confirmed：blance confirmed in the wallet.**[!! Use this !!]**

GET request example：
request url:  
`http://somewebsite.com:10332?jsonrpc=2.0&method=getblockcount&params=[]&id=1`
response:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 909129
}
```

[REF](http://docs.antshares.org/zh-cn/node/api/getbalance.html)

# Cheatsheet of Antshares Full Node
## Install .Net Core
```shell
#Ubuntu 16.04 / Linux Mint 18
sudo sh -c 'echo "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ xenial main" > /etc/apt/sources.list.d/dotnetdev.list'

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 417A0893

sudo apt-get update

sudo apt-get install dotnet-dev-1.0.4
```
## Install AntShare CLI
```shell
wget https://github.com/AntShares/AntSharesCore/releases/download/v1.6.1/AntSharesCore-CLI-v1.6.1.zip 

unzip AntSharesCore-CLI-v1.6.1.zip

cd AntSharesCore-CLI-v1.6.1

dotnet AntSharesDaemon.dll /rpc
```
## Config
Edit config.json in AntShares directory
```json
{
  "ApplicationConfiguration": {
    "DataDirectoryPath": "Chain",
    "NodePort": 10333,
    "WsPort": 10334,
    "UriPrefix": ["http://localhost:10332" ],
    "SslCert": "",
    "SslCertPassword": ""
  }
}          
```
## Run AntSharesCore

`dotnet AntSharesDaemon.dll /rpc`

## Create a wallet
after create a new wallet,you can use API.
```shell
create wallet /home/root/my.db3
```
