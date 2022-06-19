import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  listname: {
    type: String,
    required: true,
    unique: true
  },
  todo: [String],
  done: [String]
});

export default todoSchema;
