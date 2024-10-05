exports.getTicker = (sdk) => async (req, res) => {
  try {
    const { currency = "USD" } = req.params;
    const response = await sdk.getTicker(currency);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
