const { response } = require("express");
const express = require("express");
const SDK = require("@uphold/uphold-sdk-javascript").default;

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
    const pageRanges = ["0-149", "150-300"];
    const [page1, page2] = await Promise.all(
      pageRanges.map((range) =>
        sdk.api("/assets", {
          authenticate: false,
          queryParams: {
            q: "type:fiat,cryptocurrency,stablecoin",
          },
          method: "GET",
          headers: {
            Range: `items=${range}`,
          },
        }),
      ),
    );
    res.json(page1.concat(page2));
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
