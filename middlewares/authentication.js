const users = [
	{
		apiKey:
			"eGN2eGRmZ2Vmd2FzZDEydmN4dnhjdnhkZmdlZndhc2R2Y3h2eGN2eGRmZ2Vmd2FzZHZjeHZ4Y3Z4ZGZnZWZ3YXNkdmN4dnhjdnhkZmdlZndhc2R2Y3h2eGN2eGRmZ2Vmd2FzZHZjeHY=",
		deviceToken: "eGN2eGR4ZGZnZWZ3YXNkdmN4dnhjdnhkZmdlZndhc2R2Y3h2",
		fingerPrint: "123456789",
		email: "omarfesal4296@gmail.com",
	},
	{
		apiKey:
			"WlVkT01tVkhVbTFhTWxadFpESkdlbHBFUlhsa2JVNDBaRzVvYW1SdWFHdGFiV1JzV201a2FHTmhjMlF4TWpNMFpYSjBaMlprYzJGNGMzcDRZM1ppZG0xcmJITms=",
		deviceToken: "ZUdOMmVHUjRaR1puWldaM1lYTmtkbU40ZG5oamRuaGt",
		fingerPrint: "987654321",
		email: "ahmed.mohamed@gmail.com",
	},
];

module.exports = async (req, res, next) => {
	const apiKey = req.header("apiKey");
	const deviceToken = req.header("deviceToken");
	const fingerPrint = req.header("fingerPrint");
	let userList = await users.filter((currentUser) => {
		if (
			currentUser.apiKey == apiKey &&
			currentUser.fingerPrint == fingerPrint &&
			currentUser.deviceToken == deviceToken
		) {
			return currentUser;
		}
	});
	if (userList && userList.length > 0) {
		console.debug("User Found", userList[0]);

		return next();
	} else {
		console.log("User NOT Found", userList);
		return res
			.status(400)
			.json({ message: "You are not Authorized to Access this url" });
	}
};
