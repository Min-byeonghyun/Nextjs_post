import { MongoClient } from "mongodb";

const url = "mongodb+srv://qudgus5125:qudgus0125@cluster0.7qg7p.mongodb.net/";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
};

let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
