const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const data = require("./data");

let database = null;

let mongo;

async function initDatabase() {
  mongo = await MongoMemoryServer.create();
}

async function startDatabase() {
  const mongoDBURL = await mongo.getUri();
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
  });

  //Seed Database
  if (!database) {
    database = connection.db();
    await database.collection("users").insertMany(data.Users);
  }

  return database;
}

async function stopDatabase() {
  await mongo.stop();
}

module.exports = {
  initDatabase,
  startDatabase,
  stopDatabase,
};