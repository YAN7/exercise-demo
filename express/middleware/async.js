module.exports = handler => async (req, res, next) => {
	try {
		await handler(req, res);
	} catch (ex) {
		console.log('ex123', ex);
		next(ex);
	}
};
