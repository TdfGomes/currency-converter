const { mapTickers } = require("./utils");

exports.getTicker = (sdk) => async (req, res) => {
  const searchParam = new URLSearchParams(req.query);
  const amount = searchParam.get("amount");
  const code = searchParam.get("code")?.split(",");

  if (!amount) {
    res.status(400).send("Amount is a required param");
  }

  try {
    const { currency = "USD" } = req.params;
    const response = await sdk.getTicker(currency);
    const tickers = mapTickers(
      response.filter((t) => code.includes(t.currency) && t.currency !== currency),
      amount,
    );

    res.json(tickers);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
