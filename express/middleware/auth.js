const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
	const token = req.header('x-token');
	console.log('token', token);
	if (!token) {
		return res.status(401).send('未登录');
	}
	try {
		const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
		console.log('decoded', decoded);
		req.user = decoded;
		next();
	} catch (ex) {
		res.status('400').send('非法token!');
		return;
	}
};

module.exports = auth;
