import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const myDB = client.db("micro-blog");
const entries = myDB.collection("entries");

export async function allEntries() {
  await client.connect();
  let result = await entries.find().toArray();
  console.log(result);
  return result;
}

export async function addEntry(entry) {
  await entries.insertOne(entry);
  return true;
}
