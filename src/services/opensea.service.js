// import { ethers } from "ethers";
// import { OpenSeaSDK, Chain } from "opensea-js";
const ethers = require("ethers");
const { OpenSeaSDK, Chain } = require("opensea-js");

// This example provider won't let you make transactions, only read-only calls:
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io"
);

const openseaSDK = new OpenSeaSDK(provider, {
  chain: Chain.Mainnet,
  apiKey: process.env.OPENSEA_API_KEY,
});

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

async function getCollectionTraits(collection) {
  collectionInfo = await openseaSDK.api.getCollection(collection);
  traitStats = collectionInfo.traitStats;

  return Object.fromEntries(
    Object.entries(traitStats).map((_obj) => [_obj[0], Object.keys(_obj[1])])
  );
}

module.exports = openseaSDK;
