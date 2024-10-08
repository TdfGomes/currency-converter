# Currency Calculator with Uphold SDK 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites
Node.js yarn: Ensure you have [Node.js](https://nodejs.org/en) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install) installed on your system.
For NodeJS it's recommended to use `nvm` to install the right version of NodeJS
You will need to have a CLIENT_ID and CLIENT_SECRET to use the uphold SDK 
You can get one [here](https://wallet-sandbox.uphold.com/login).
Then you will need to create a `.env.local` file in `server` directory like: 

```env
REACT_APP_CLIENT_ID = <YOUR-CLIENT-ID>
REACT_APP_CLIENT_SECRET = <YOUR-CLIENT-SECRET>
REACT_APP_BASE_URL =  https://api-sandbox.uphold.com
```


## Available Scripts (client)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Available Scripts (server)

### `yarn start:server`
Runs the proxy server at [http://localhost:3001](http://localhost:3001)  

### `yarn test`
Runs the server tests


## Usage

You need to run `yarn install` on both directories (client and server).\
Then you will need to open one terminal tab or window for each directory and run the start command for each one.

Client terminal
```bash
cd client && yarn start
```

Server terminal
```bash
cd server && yarn start:server
```


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
