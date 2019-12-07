const Joi = require('@hapi/joi');
const express = require('express');
const mongoose = require('mongoose');

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const asyncMiddleware = require('../middleware/async');
const validateObjectId = require('../middleware/validateObjectId');

const router = express.Router();

// const asyncMiddleware = handler => async (req, res, next) => {
// 	try {
// 		await handler(req, res);
// 	} catch (ex) {
// 		console.log('ex123', ex);
// 		next(ex);
// 	}
// };

// const courseShema = new mongoose,schema
const couseSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: [5, '名称最小5字符'],
		maxlength: [25, '名称不得超过25字符'],
		required: [true, '名称不得为空'],
		trim: true,
	},
});

const Course = new mongoose.model('courses', couseSchema);

let courses = [{name: 123, id: 111}];

const valiInput = (test) => {
	const schema = Joi.object().keys({
		name: Joi.string().min(3).max(10).required().error((err) => {
			const type = err[0].type.split('.')[1];
			switch (type) {
			case 'base': return 'id必须是字符串类型!';
			case 'max': return '输入的字符串长度不得超过10';
			case 'min': return '输入的字符串长度不得小于3';
			default: return 123;
			}
		}),
	});
	return Joi.validate(test, schema);
};

router.get('/', [auth, admin, validateObjectId], async (req, res) => {
	const courses =  await Course.find();
	res.send(courses);
});

router.get('/:id', async (req, res) => {
	try {
		const course = await Course.findById(req.params.id);
		if (!course) return res.status('404').send('the course with the given ID was not found.');
		res.send(course);
	} catch(err) {
		res.status(500).send(err);
	}
});

// create source
router.post('/', [auth, admin], async (req, res) => {
	const { error } = valiInput(req.body);
	if (error) return res.status('400').send(error.details[0].message);
	// const course = req.body;
	// courses.push(course);
	try {
		const course = new Course(req.body);
		await course.save();
		res.send(course);
	} catch(err) {
		console.log('err', err.message);
	}
});

// update source
router.put('/:id', async (req, res) => {
	try {
		// const targetCourse = await Course.findById(req.params.id);
		// if (!targetCourse) return res.status('404').send('没有该课程');
		// const { error } = valiInput(req.body);
		// if (error) return res.status('400').send(error.details[0].message);
		// await targetCourse.set(req.body).save();
		// const sendData = await Course.findById(req.params.id).select('_id');
		const { id, ...otherParams } = req.params;
		const targetCouse = await Course.findByIdAndUpdate(id, otherParams, {new: true});
		console.log('targetCouse', targetCouse);
		// if (!)
		res.send({
			code: 200,
			message: '更新成功',
			data: targetCouse._id,
		});
	} catch(err) {
		// console.error('opps', err);
		res.status(500).send(err.message);
	}
});

// delete source
router.delete('/:id', [auth, admin], (req, res) => {
	const targetCourse = courses.find(c => c.id === parseInt(req.params.id));
	if (!targetCourse) return res.status('404').send('没有该课程!');
	const index = courses.indexOf(targetCourse);
	courses.splice(index, 1);
	res.send(targetCourse);
});

module.exports = router;