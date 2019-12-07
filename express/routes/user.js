const { User, validate  }  = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const userRouter = express.Router();

userRouter.get('/current', auth,  async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	res.send(user);
});

userRouter.get('/', async (req, res) => {
	// const user = await 
	const { error } = validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	let user = await User.findOne({email: req.body.email});
	if (user) {
		return res.status(400).send('此邮箱已注册!');
	}
	const {email, name, password} = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	user = new User({
		email,
		name,
		password: hashedPassword,
	});
	const newUser = await user.save();
	const {name: newName, _id: id} = newUser;
	const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, config.get('jwtPrivateKey'));
	res
		.header('x-token', token)
		.send({
			name: newName,
			id,
		});
});

module.exports = userRouter;
