# React Reflux Boilerplate

> An application architecture for React utilizing a unidirectional data flow with the [Reflux](https://www.npmjs.org/package/reflux) Architecture

##### Uses:

- [React Router](https://github.com/rackt/react-router)
- [Reflux](https://www.npmjs.org/package/reflux)
- [Flow](http://flowtype.org/)
- [Jest](https://facebook.github.io/jest/)

## Install

```sh
$ npm install
$ bower install
$ ./script/dev
# open http://localhost:3000
```

## Type checking

```flow check```

Static Type checking is implemented with Flow.

## Tests

```npm test```

Testing is done with Jest. It uses a preprocessor that strips Flow type annotations and a test helper that mocks
react-router.

## Demo

[Heroku](https://reactboiler.herokuapp.com/)
