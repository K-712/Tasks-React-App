import mongoose from "mongoose";
import todoSchema from "./TodoSchema.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  lists: [todoSchema]
});

export default userSchema;
