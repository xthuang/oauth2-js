# Summer 2017 openID Connect with OAuth2

## Required Installation

1. npm
2. webpack

## Steps
### 1. generate package.json by initializing npm 
'''
npm init
'''

### 2. modify package.json 
(The package.json is only an example)
  * add 'webpack index.js aaron-bundle.js' after "test: "
  * add the following after "license": "ISC"
'''
"dependencies": {
    "@zalando/oauth2-client-js": "0.0.18"
  }
''' 

### 3. modify index.js
  *only import js files that will be bundled
  *For authentication only include the auth_js.js and oauth.js 
### 4. modify auth_js.js
  *input id, authorization uri, client id, redirect uri

### 5. create bundle
  *(The bundle.js is just an example.)
'''
npm run test
'''


