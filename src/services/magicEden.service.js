const axios = require("axios");

const MAGIC_EDEN_API = "https://api-mainnet.magiceden.dev/v2";

async function getLastListings(collection, limit = 1) {
  try {
    res = await axios.get(
      `${MAGIC_EDEN_API}/collections/${collection.symbol}/listings?limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function getToken(mintAddress) {
  try {
    res = await axios.get(`${MAGIC_EDEN_API}/tokens/${mintAddress}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function getCollectionTraits(collection) {
  lastListings = await getLastListings(collection);
  lastListing = lastListings[0];
  console.log("last listing", lastListing);
  tokenMint = lastListing.tokenMint;

  tokenData = await getToken(tokenMint);
  console.log(tokenData.attributes);

  return tokenData.attributes.map((attr) => attr.trait_type);
}
module.exports = {
  getLastListings,
  getCollectionTraits,
};
