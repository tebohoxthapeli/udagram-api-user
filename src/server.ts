import express from "express";
import cors from "cors";

import { sequelize } from "./sequelize";
import { IndexRouter } from "./controllers/v0/index.router";
import { V0_USER_MODELS } from "./controllers/v0/model.index";
import { config } from "./config/config";

(async () => {
	await sequelize.addModels(V0_USER_MODELS);
	console.debug("Initialize database connection...");
	await sequelize.sync();

	const app = express();
	const port = process.env.PORT || 8080;

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use(
		cors({
			allowedHeaders: [
				"Origin",
				"X-Requested-With",
				"Access-Control-Allow-Origin",
				"Content-Type",
				"Accept",
				"X-Access-Token",
				"Authorization",
			],
			methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
			preflightContinue: true,
			origin: "*",
		})
	);

	app.use("/api/v0/", IndexRouter);

	app.listen(port, () => {
		console.log(`server running ${config.url}`);
		console.log(`press CTRL+C to stop server`);
	});
})();
