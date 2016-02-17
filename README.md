# ATTENTION

I consider the code in this repo okayish for 2014-era React, but I now consider it completely deprecated.

Please visit this repo instead: https://github.com/svenanders/minimal-react


# Learn React

This repo is a learning tool for React. Each single module is meant to show or highlight a feature or thing you can do with React. Fork and add modules if you want to showcase something. 

## Check it out online

[Web site](https://learnreact.robbestad.com/)

## Install

```sh
$ npm install
$ npm run dev 
open http://localhost:8080
```

## Type checking

```flow check```

Static Type checking is (partially) implemented with Flow.

## Tests

#### Travis

https://travis-ci.org/svenanders/learn-react

[![Build Status](https://travis-ci.org/svenanders/learn-react.svg?branch=master)](https://travis-ci.org/svenanders/learn-react)

#### Local testing

```npm test```

Testing is done with Jest. It uses a preprocessor that strips Flow type annotations and a test helper that mocks
react-router.

## Tech

> Built on an application architecture for React 
    
- [React Router](https://github.com/rackt/react-router)
- [Reflux](https://www.npmjs.org/package/reflux)
- [Flow](http://flowtype.org/)
- [Jest](https://facebook.github.io/jest/)

