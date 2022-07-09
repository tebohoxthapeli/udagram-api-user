import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

const { username, password, database, host, dialect } = config;

export const sequelize = new Sequelize({
	database,
	dialect,
	username,
	password,
	storage: ":memory:",
	host,
});
