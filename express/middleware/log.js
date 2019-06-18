const log = (log) => {
	console.log('logging111....,', log);
	return function (req, res, next) {
		next();
	};
};

module.exports = log;
