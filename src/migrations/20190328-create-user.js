"use strict";

export function up(queryInterface, Sequelize) {
	return queryInterface.createTable("User", {
		id: {
			allowNull: false,
			autoIncrement: true,
			type: Sequelize.INTEGER,
		},
		email: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		passwordHash: {
			type: Sequelize.STRING,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable("User");
}
