const Joi = require('@hapi/joi');
const { User  }  = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const authRouter = express.Router();

const validate = (req) => {
	const schema = {
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(8).max(255).required(),
	};
	return Joi.validate(req, schema);
};

authRouter.get('/', async (req, res) => {
	// const user = await 
	const { error } = validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	let user = await User.findOne({email: req.body.email});
	if (!user) {
		return res.status(400).send('邮箱或密码错误!');
	}
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) {
		return res.status(400).send('邮箱或密码错误!');
	}
	const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, config.get('jwtPrivateKey'));
	res.send(token);
});

module.exports = authRouter;
