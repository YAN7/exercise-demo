const express = require('express');
const helmet = require('helmet');
const courseRouter = require('../routes/courses');
const indexRouter = require('../routes/home');
const userRouter = require('../routes/user');
const authRouter = require('../routes/auth');
const error = require('../middleware/error');



module.exports = function(app) {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static('public'));
	app.use(helmet());
	app.use('/', indexRouter);
	app.use('/api/course', courseRouter);
	app.use('/api/user', userRouter);
	app.use('/api/auth', authRouter);
	app.use(error);
};
