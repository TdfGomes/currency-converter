const express = require("express");
const SDK = require("@uphold/uphold-sdk-javascript").default;
const { getAssets } = require("./getAssets");

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

app.get("/assets", async (_req, res) => {
  try {
    const assets = await getAssets(sdk);
    res.json(assets);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.get("/ticker/:currency", async (req, res) => {
  try {
    const { currency = "USD" } = req.params;
    const response = await sdk.getTicker(currency);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
