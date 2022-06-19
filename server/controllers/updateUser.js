import mongoose from "mongoose";
import userSchema from "../models/UserSchema.js";
const User = mongoose.model("User", userSchema);

const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { username: req.params.username },
    req.body,
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    }
  );
};

export { updateUser };
