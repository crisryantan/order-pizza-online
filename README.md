# Order Pizza Online

### Tech stack

- **React** - frontend/view library
- **Redux** - state management library
- **Axios** - For HTTP client

### Setup and Run

- `$ git clone https://github.com/xxryan1234/order-pizza-online.git && cd github` will download the app and cd to the folder once done.

# for both client and server run

- `yarn install` - to install dependencies.
- `yarn start` - Runs the app in development mode.
- `yarn build` - Builds the app for production to the build folder.

### Questions

- packages/libraries used.

  - [react-loadable](https://github.com/jamiebuilds/react-loadable) - A higher order component for loading components with dynamic imports.
  - [ant-design](https://github.com/ant-design/ant-design) - An enterprise-class UI design language and React-based implementation.
  - [react](https://facebook.github.io/react/) - awesome view library
  - [react-router](https://github.com/ReactTraining/react-router) - for routing
  - [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate/) - A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.
  - [ImmutableJS](https://facebook.github.io/immutable-js/) - Immutable data structures can be deeply compared in no time. This allows us to efficiently determine if our components need to rerender since we know if the props changed or not!
  - [react-redux](http://redux.js.org/) - state management library. The state of your whole application is stored in an object tree within a single store.
  - [redux-saga](https://github.com/redux-saga/redux-saga) - middleware to handle promises
  - [reselect](https://github.com/reduxjs/reselect) - Selectors can compute derived data, allowing Redux to store the minimal possible state.
  - [styled components](https://www.styled-components.com/) - Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.

- file structure frontend

  - Top Level

  ```
  app
  │
  │
  ├── components  <--- stateless components
  │   ├── Button
  │   │   ├── Button.test.js
  │   │   └── index.js
  │   │
  │   └── Img
  │       ├── Img.test.js
  │       └── index.js
  │
  ├── containers <--- stateful components/route components
  │   ├── App
  │   │   ├── index.js
  │   │   └── logo.png
  │   │
  │   ├── HomePage
  │   │   ├── actions.js
  │   │   ├── constants.js
  │   │   ├── index.js
  │   │   ├── reducer.js
  │   │   ├── selectors.js
  │   │   └── tests
  │   │       ├── actions.test.js
  │   │       └── reducer.test.js
  │   └──NotFoundPage
  │       └── index.js
  │
  │
  ├── index.html
  ├── routes.js
  ├── manifest.json
  ├── configureStore.js
  └── app.js
  ```
