import mongoose from "mongoose";
import userSchema from "../models/UserSchema.js";
const User = mongoose.model("User", userSchema);

const getUserByUsername = (req, res) => {
  User.find({ username: req.params.username }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

export default getUserByUsername;
