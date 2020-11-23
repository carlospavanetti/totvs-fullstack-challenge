import { Router } from "express";
import DefaultersController from "./Defaulters.Controller";

const router = Router();
router.use("/defaulters", DefaultersController);

export default router;
