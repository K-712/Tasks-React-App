import express from "express";
const router = express.Router();

// import controllers
import getUserByUsername from "../controllers/getUser.js";

const routes = app => {
  app.route("/user/:username").get(getUserByUsername);
};

export default routes;
