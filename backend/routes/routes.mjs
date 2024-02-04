import express from "express";
import { getAll, create } from "../controllers/videosUpload.mjs";
import videomiddleware from "../utility/mediaUpload.mjs";

const routes = express.Router();

routes.route("/getall").get(getAll);

//post method

routes.route("/create").post(videomiddleware(), create);

export default routes;
