import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL || "";
const dbName = process.env.MONGO_DATABASE;
const client = new MongoClient(uri);

async function connect() {
  await client.connect();
  const database = client.db(dbName);
  await database.command({ ping: 1 });

  return { client, database: dbName };
}

export default connect();
