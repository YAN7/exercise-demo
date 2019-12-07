const mongoose = require('mongoose');
const config = require('config');
const winston = require('winston');

module.exports = function() {
	mongoose.set('useUnifiedTopology', true);
	// 连接数据库啦
	mongoose
		.connect(config.get('db'), { 
			dbName: 'playground', 
			useUnifiedTopology: true,
			useNewUrlParser: true, 
			useCreateIndex: true,
		})
		.then(() => winston.info('连接数据库成功'));
};
