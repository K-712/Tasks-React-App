import mongoose from "mongoose";
const Db = process.env.MONGO_URI || "mongodb://localhost:27017/todoDB";

mongoose.connect(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

export default db;
