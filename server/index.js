const express = require("express");
const SDK = require("@uphold/uphold-sdk-javascript").default;
const { getAssets, getTicker } = require("./controllers");

const PORT = 3001;

const app = express();

const sdk = new SDK({
  baseUrl: `${process.env.REACT_APP_BASE_URL}`,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/assets", getAssets(sdk));

app.get("/api/ticker/:currency", getTicker(sdk));
