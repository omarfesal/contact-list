const { sequelize } = require("../../models/index");

describe("test contact controller", () => {
	it("should connect to db succuessfully", async (done) => {
		try {
			await sequelize.authenticate();
			console.log("Connection has been established successfully.");
			done();
		} catch (error) {
			console.error("Unable to connect to the database:", error);
		}
	});
});
