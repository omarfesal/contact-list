"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					firstName: "Omar",
					lastName: "Ghazi",
					email: "omarfesal4296@gmail.com",
					createdAt: "2020-04-18 09:34:34",
					updatedAt: "2020-04-18 09:34:34",
				},
				{
					firstName: "Ahmed",
					lastName: "Mohamed",
					email: "ahmed.mohamed@gmail.com",
					createdAt: "2020-04-18 09:34:34",
					updatedAt: "2020-04-18 09:34:34",
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	},
};
