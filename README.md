# Javascript Async examples (Callbacks, Promises, Async/Await, RxJS)

Examples on async programming with callbacks, promises, async/await and RxJS

## Getting Started

### Prerequisites

- NodeJs
- Npm
- Wiremock (http://wiremock.org/docs/running-standalone/)
- Java

### Installing

Run in the root of the project

```
npm install
```

Download Wiremock (http://wiremock.org/docs/running-standalone/) to run certain examples and place the jar in `wiremock` folder

## Run

Some examples require a server that will respond to your requests, run wiremock in order to do that run the following command inside the wiremock folder

```
java -jar wiremock-standalone-2.23.2.jar
```

Then run an example you should do

```
node filename.js
```

## Built With

- [Npm](https://www.npmjs.com/) - JavaScript development
- [NodeJS](https://nodejs.org/en/) - JavaScript runtime
- [RxJS](https://rxjs-dev.firebaseapp.com/) - Reactive Extensions Library for JavaScript
- [Request](https://www.npmjs.com/package/request) - Simplified HTTP client
- [Request Promise](https://www.npmjs.com/package/request-promise) - The simplified HTTP request client 'request' with Promise support

## Authors

- **Martin Silberkasten**
