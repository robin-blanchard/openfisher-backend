const { OpenSeaStreamClient } = require("@opensea/stream-js");
const { WebSocket } = require("ws");

const Collection = require("../models/collection");

// Collection Listing Finders
const finders = new Map();

function createCollectionFinder(address) {
  const client = new OpenSeaStreamClient({
    token: process.env.OPENSEA_API_KEY,
    connectOptions: {
      transport: WebSocket,
    },
  });

  client.connect();

  client.onItemListed(address, (event) => {
    console.log("New event found for collection at ", address, ": ");
    console.log(event);
  });

  finders.set(address, client);
}

function updateFinders(addresses) {
  const existingFinders = Array.from(finders.keys());

  // Check for new addresses
  const newAddresses = addresses.filter(
    (address) => !existingFinders.includes(address)
  );
  newAddresses.forEach((address) => createCollectionFinder(address));

  // Check for finders that should be removed
  const findersToRemove = existingFinders.filter(
    (address) => !addresses.includes(address)
  );
  findersToRemove.forEach((address) => {
    const client = finders.get(address);
    client.disconnect();
    finders.delete(address);
  });
}

function updateFindersFromDB() {
  Collection.findAll().then((data) => {
    console.log(data);
  });
}

module.exports = updateFindersFromDB;
