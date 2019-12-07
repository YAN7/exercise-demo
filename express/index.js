const express = require('express');
const winston = require('winston');

const app = new express();
require('./startup/logger')();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/config')(app);
require('./startup/validation')();
require('./startup/prod')(app);

app.listen(3211, () => {
	winston.info('your apps is listenning at port 3211');
});
