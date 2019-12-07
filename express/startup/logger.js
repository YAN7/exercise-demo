const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
	winston.exceptions.handle(
		new winston.transports.Console({ 
			format: winston.format.simple(),
			colorize: winston.format.colorize(),
			prettyPrint: winston.format.prettyPrint(),
		}),
		new winston.transports.File({ filename: 'uncaughtExceptions.log' })
	);
	winston.add(new winston.transports.File({ filename: 'logfile.log' }));
	// winston.add(new winston.transports.MongoDB({
	// 	db: 'mongodb://localhost/vidly',
	// 	level: 'error,'
	// }));

	global.process.on('uncaughtException', (ex) => {
		console.log('获取到同步错误');
		throw ex;
	});

	global.process.on('unhandledRejection', (ex) => {
		console.log('获取到异步错误');
		throw ex;
	});

};
