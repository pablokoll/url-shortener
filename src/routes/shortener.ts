import { Router } from "express";
import ShortenerController from "../controllers/ShortenerController";

const shortenerRouter = Router();

shortenerRouter.route("/").get(ShortenerController.getAllShortUrls);

shortenerRouter.route("/:shortid").get(ShortenerController.getShortUrl);

shortenerRouter.route("/short").post(ShortenerController.createShortUrl);

export default shortenerRouter;
