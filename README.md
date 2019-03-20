## SPFx-jesttest

This is a project to show how to use jest for unit tests in a SPFx web part project. 

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### npm options
npm test - start jest testing. 

