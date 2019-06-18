const express = require('express');

const router = express.Router();

// get source
router.get('/', (req, res) => {
	// res.send('hello world');
	res.render('index', { title: 'My Exporess App', message: 'Hello World' });
});

module.exports = router;
