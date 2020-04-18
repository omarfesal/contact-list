const request = require("supertest");
const app = require("../../../app");

describe("test contact controller", () => {
	it("should add new contact and return successful", async (done) => {
		expect.assertions(2);
		request(app)
			.post("/api/v1/contacts/addContact")
			.send({
				email: "omar@gmail.com",
				mobile: "+201010101010",
				firstname: "Omar",
				lastname: "Ghazy",
				authorization: "token",
				deviceToken: "asdad",
				fingerPrint: "asdad",
			})
			.then((res) => {
				expect(res.statusCode).toEqual(200);
				let responseData = { message: "data added successfully" };
				expect(res.body).toMatchObject(responseData);
				done();
			});
	});
});
