import express from "express";
const router = express.Router();

// import controllers
import getUserByUsername from "../controllers/getUser.js";
import { updateUser } from "../controllers/updateUser.js";

const routes = app => {
  app
    .route("/user/:username")
    .get(getUserByUsername)
    .put(updateUser);
};

export default routes;
