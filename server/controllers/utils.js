const getValue = (ask, bid, amount) => {
  const halfPoint = (parseFloat(bid, 10) + parseFloat(ask, 10)) / 2;
  return parseInt(amount, 10) * halfPoint;
};

module.exports = {
  mapAssets: (assets) =>
    assets?.map(({ code, image }) => ({ value: code, label: code, imgSrc: image })),
  mapTickers: (tickers, amount) =>
    tickers.map(({ ask, bid, currency }) => ({
      value: getValue(ask, bid, amount).toString(),
      currency: {
        value: currency,
        label: currency,
        imgSrc: `https://cdn.uphold.com/assets/${currency}.svg`,
      },
    })),
};
