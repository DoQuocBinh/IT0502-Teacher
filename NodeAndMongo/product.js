const { getDatabase } = require('./db');

const collectionName = 'products';

async function getProducts() {
  const db = getDatabase();
  return db.collection(collectionName).find().toArray();
}

module.exports = { getProducts };
