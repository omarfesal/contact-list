const request = require("supertest");
const app = require("../../app");

describe("test contact controller", () => {
	test("addContact Api should add new contact and return successful", async (done) => {
		expect.assertions(2);
		request(app)
			.post("/api/v1/contacts/addContact")
			.set({
				apiKey:
					"WlVkT01tVkhVbTFhTWxadFpESkdlbHBFUlhsa2JVNDBaRzVvYW1SdWFHdGFiV1JzV201a2FHTmhjMlF4TWpNMFpYSjBaMlprYzJGNGMzcDRZM1ppZG0xcmJITms=",
				deviceToken: "ZUdOMmVHUjRaR1puWldaM1lYTmtkbU40ZG5oamRuaGt",
				fingerPrint: "987654321",
				email: "ahmed.mohamed@gmail.com",
			})
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
			.set({
				apiKey:
					"WlVkT01tVkhVbTFhTWxadFpESkdlbHBFUlhsa2JVNDBaRzVvYW1SdWFHdGFiV1JzV201a2FHTmhjMlF4TWpNMFpYSjBaMlprYzJGNGMzcDRZM1ppZG0xcmJITms=",
				deviceToken: "ZUdOMmVHUjRaR1puWldaM1lYTmtkbU40ZG5oamRuaGt",
				fingerPrint: "987654321",
				email: "ahmed.mohamed@gmail.com",
			})
			.then((res) => {
				expect(res.statusCode).toEqual(200);
				done();
			});
	});

	test("getRecentlist API should return successful", async (done) => {
		request(app)
			.post("/api/v1/contacts/getRecentlist")
			.set({
				apiKey:
					"WlVkT01tVkhVbTFhTWxadFpESkdlbHBFUlhsa2JVNDBaRzVvYW1SdWFHdGFiV1JzV201a2FHTmhjMlF4TWpNMFpYSjBaMlprYzJGNGMzcDRZM1ppZG0xcmJITms=",
				deviceToken: "ZUdOMmVHUjRaR1puWldaM1lYTmtkbU40ZG5oamRuaGt",
				fingerPrint: "987654321",
				email: "ahmed.mohamed@gmail.com",
			})
			.then((res) => {
				expect(res.statusCode).toEqual(200);
				done();
			});
	});
});
