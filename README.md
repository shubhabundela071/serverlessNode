# Serverless + NodeJs

## System Requirement

* Node version : v12.0.0
* NPM version : 8.14.4
* Serverless Framework : 2.11.1
* Serverless-offline : 6.8.0

## Getting Started

Install dependencies:
```sh

- cd /project
- npm i
- curl -o- -L https://slss.io/install | bash
- npm install -g serverless
- npm install serverless-offline --save-dev

```

Start server:
```sh

# Start server
Local Server start:
 - sls offline

Live Server Deploy:
  - serverless deploy -v & sls deploy -v

# DB Connetion and credentials
.env 

# Server listening port:
3000

```
# Reference
https://github.com/codingly-io/sls-base

https://www.serverless.com/framework/docs/getting-started/


