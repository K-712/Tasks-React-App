import mongoose from "mongoose";
import userSchema from "../models/UserSchema.js";
const User = mongoose.model("User", userSchema);

const updateUser = (req, res) => {
  console.log("backend updating database");
  console.log("request body list", req.body.lists);
  User.findOneAndUpdate(
    { username: req.params.username },
    req.body,
    { new: true, useFindAndModify: false },
    (err, user) => {
      console.log("found user", user);
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    }
  );
};

export { updateUser };
