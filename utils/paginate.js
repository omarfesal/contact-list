const paginate = (page = 0, pageSize = 10) => {
	const offset = parseInt(page) * parseInt(pageSize);
	const limit = parseInt(pageSize);

	return {
		offset,
		limit,
	};
};

module.exports = { paginate };
