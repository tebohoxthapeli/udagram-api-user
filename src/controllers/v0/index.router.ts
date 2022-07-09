import { Router } from "express";
import { UserRouter } from "./users/routes/user.router";

const router = Router();
router.use("/users", UserRouter);

export { router as IndexRouter };
