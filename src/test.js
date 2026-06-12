const { MongoClient } = require("mongodb");

const uri =
"mongodb+srv://amanv2225_db_user:YOUR_PASSWORD@cluster0.v76f57c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
