import { Router, Request, Response } from "express";

import { User } from "../models/User";
import { AuthRouter } from "./auth.router";

const router = Router();

router.use("/auth", AuthRouter);

router.get("/");

router.get("/:id", async (req: Request, res: Response) => {
	const item = await User.findByPk(req.params.id);
	res.send(item);
});

export { router as UserRouter };
