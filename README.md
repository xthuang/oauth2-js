# Summer 2017 openID Connect with OAuth2
This is an openID Connect javascript/Node.js implementation with OAuth2 library

## Required Installation

1. npm
2. webpack

## Steps
### 1. generate package.json by initializing npm 
```
npm init
```

### 2. modify package.json (The package.json included within this github is only an example)
  add the following after "test: "
  ```
  webpack index.js bundle.js
  ``` 
  * add the following after "license": "ISC"
```
"dependencies": {
    "@zalando/oauth2-client-js": "0.0.18"
  }
```

### 3. modify index.js
  only import js files that will be bundled
  For authentication only include the auth_js.js and oauth.js 
### 4. modify auth_js.js
  input id, authorization uri, client id, redirect uri

### 5. create bundle (The bundle.js included within this github is only an example.)
```
npm run test
```


