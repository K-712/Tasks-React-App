import "dotenv/config";
// import modules
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import routes from "./routes/routes.js";

const port = process.env.PORT || 5000;

// app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
routes(app);

// db
import db from "./db/conn.js";
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("database connected");
});

import userSchema from "./models/UserSchema.js";
const User = mongoose.model("User", userSchema);

// init default list
// const user = new User({
//   username: "User",
//   lists: [
//     {
//       listname: "To Do List",
//       todo: ["Task 1", "Some task to be done"],
//       done: ["Task which is already done"]
//     },
//     {
//       listname: "Second list",
//       todo: ["Second list task", "Some task to be done"],
//       done: ["Task which is already done"]
//     }
//   ]
// });
// user.save();

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

var corsOptions = {
  origin: "http://localhost:3000"
};
var issuesoption = {
  origin: true,
  methods: ["GET, POST, OPTIONS, PUT, PATCH, DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(issuesoption));

// port
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
