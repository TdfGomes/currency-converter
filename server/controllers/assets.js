const { mapAssets } = require("./utils");

exports.getAssets = (sdk) => async (_req, res) => {
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
    res.json(mapAssets(page1.concat(page2)));
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
