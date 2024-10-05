async function getAssets(sdk) {
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
  return page1.concat(page2);
}

module.exports = { getAssets };
