export async function getAssets() {
  try {
    const response = await fetch("/api/assets");
    return await response.json();
  } catch (e) {
    //log error to an event monitorung tool
    //sendEventError(e)
    console.error(e);
    //send a usefull message to the user
    throw new Error("Something went wrong. It's not possible to fetch assets");
  }
}
