const config = require('config');
const morgan = require('morgan');
const debug = require('debug')('app:startup');

module.exports = function(app) {
	if (!config.get('jwtPrivateKey')) {
		throw new Error('FATALERROR: jwtPrivateKey为空!');
	}

	if (app.get('env') === 'development') {
		app.use(morgan('tiny'));
		debug('morgan is enable');
	}
};
