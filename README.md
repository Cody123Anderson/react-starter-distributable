# React Starter Distributable  
React Starter application for distributable components (i.e. they will be imported into other React applications).
This is meant to be forked and used to build other npm packages.    

# Example Usage  
```javascript
// Install package
yarn add react-starter-distributable // Yarn

// OR

npm install -S react-starter-distributable // NPM

// Import the component into your js/jsx file
import { ReactStarterDistributable } from 'react-starter-distributable';

// Use component in render function of react component
<ReactStarterDistributable />
```


# Scripts Available for Development
You will need a global installation of yarn to run these commands.  

```javascript
yarn install // Installs all dependencies

yarn run dev // Builds bundle-dev.js and watches for changes

yarn run dev:server // Runs application on localhost:8080 and updates for changes in bundle-dev.js

yarn run lint // Runs both the JS and SASS linters

yarn run lint:sass // Runs just the SASS linter

yarn run test // Runs the tests on the components - see https://github.com/producthunt/chai-enzyme for available chai-enzyme test assertions
```


# Hacking on This Project  
Fork this repository and use the same scripts as listed above. Once you've made your changes, just submit
a pull request to the master branch of the master repository.  

Make sure to run this command before committing code:  
`yarn run prod` - Builds production bundle.js files  
