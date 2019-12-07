const mongoose = require('mongoose');

module.exports = function(req, res, next) {
	if (mongoose.Types.ObjectId(req.params.id)) {
		return res.status(404).send('非法Id');
	}
	next();
};
