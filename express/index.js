const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
// const config = require('config');
const debug = require('debug')('app:startup');

const courseRouter = require('./routes/courses');
const indexRouter = require('./routes/home');

const app = new express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/', indexRouter);
app.use('/api/course', courseRouter);

if (app.get('env') === 'development') {
	app.use(morgan('tiny'));
	debug('morgan is enable');
}

app.listen(3211, () => {
	// eslint-disable-next-line no-console
	console.log('your app is listenning at port 3211');
});

