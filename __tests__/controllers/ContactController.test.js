const request = require("supertest");
const app = require("../../app");

describe("test contact controller", () => {
	test("addContact Api should add new contact and return successful", async (done) => {
		expect.assertions(2);
		request(app)
			.post("/api/v1/contacts/addContact")
			.send({
				email: "omar@gmail.com",
				mobile: "+201010101010",
				firstName: "Omar",
				lastName: "Ghazy",
			})
			.then((res) => {
				expect(res.statusCode).toEqual(200);
				let responseData = {
					message: "data added successfully",
					data: {
						email: "omar@gmail.com",
						mobile: "+201010101010",
						firstName: "Omar",
						lastName: "Ghazy",
					},
				};
				expect(res.body).toMatchObject(responseData);
				done();
			});
	});

	test("getList API should return successful", async (done) => {
		request(app)
			.post("/api/v1/contacts/getlist")
			.then((res) => {
				expect(res.statusCode).toEqual(200);
				done();
			});
	});

	test("getRecentlist API should return successful", async (done) => {
		request(app)
			.post("/api/v1/contacts/getRecentlist")
			.then((res) => {
				expect(res.statusCode).toEqual(200);
				done();
			});
	});
});
