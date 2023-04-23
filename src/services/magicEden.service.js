const axios = require("axios");

const MAGIC_EDEN_API = "https://api-mainnet.magiceden.dev/v2";

async function getLastListings(collection, limit = 1) {
  console.log(
    `${MAGIC_EDEN_API}/collections/${collection.symbol}/listings?limit=${limit}`
  );

  try {
    res = await axios.get(
      `${MAGIC_EDEN_API}/collections/${collection.symbol}/listings?limit=${limit}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getLastListings,
};
