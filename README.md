# React Starter Distributable  
React Starter application meant to be imported into other react applications  

# Usage  
```
yarn install -S https://github.com/Cody123Anderson/react-starter-distributable.git#1.0.0 //or specify a newer version
import { ReactStarterDistributable } from 'react-starter-distributable'
<ReactStarterDistributable />` - In render function of React Component
```


# Hacking on the Application  
You will need a global installation of yarn to run these commands.  

```
yarn install // Installs all dependencies  
yarn run dev // Builds bundle-dev.js and watches for changes  
yarn run dev:server // Runs application on localhost:8080 and updates for changes in bundle-dev.js  
yarn run lint // Runs both the JS and SASS linters  
yarn run lint:sass // Runs just the SASS linter  
yarn run test // Runs the tests on the components - see https://github.com/producthunt/chai-enzyme for available chai-enzyme test assertions
```


## Before Pushing Code  
Bump version in package.json  

Then:  
`yarn run prod` - Builds production bundle.js files  

## After Pushing Code  
Tag the last commit locally with a version number:  
`git tag -a <new version number> -m <tag message here> <commit number you're tagging>`   

An example would be:  
`git tag -a 1.0.1 -m "updated styling on example component" alsdkjf012fasdf23f3434`  

Then Push the tag to the remote git repository:  
`git push origin --tags`  
