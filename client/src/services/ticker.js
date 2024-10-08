const defaultCode = "CHF,EUR,JPY,GBP,CNY,BTC,ETH,BNB,SOL,ADA,USD,PLN";
export async function getTicker(currency, amount, code = defaultCode) {
  try {
    const response = await fetch(`/api/ticker/${currency}?amount=${amount}&code=${code}`);
    return await response.json();
  } catch (e) {
    //log error to an event monitorung tool
    //sendEventError(e)
    console.error(e);
    //send a usefull message to the user
    throw new Error(`Something went wrong. It's not possible to fetch tickers for ${currency}`);
  }
}
