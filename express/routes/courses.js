const Joi = require('@hapi/joi');
const express = require('express');

const router = express.Router();

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' },
];

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

router.get('/', (req, res) => {
	res.send(courses);
});

router.get('/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status('404').send('the course with the given ID was not found.');
	res.send(course);
});

// create source
router.post('/', (req, res) => {
	const { error } = valiInput(req.body);
	if (error) return res.status('400').send(error.details[0].message);
	const course = {
		id: courses.length + 1,
		name: req.body.name,
	};
	courses.push(course);
	res.send(course);
});

// update source
router.put('/:id', (req, res) => {
	const targetCourse = courses.find(c => c.id === parseInt(req.params.id));
	if (!targetCourse) return res.status('404').send('没有该课程');
	const { error } = valiInput(req.body);
	if (error) return res.status('400').send(error.details[0].message);
	targetCourse.name = req.body.name;
	res.send(targetCourse);
});

// delete source
router.delete('/:id', (req, res) => {
	const targetCourse = courses.find(c => c.id === parseInt(req.params.id));
	if (!targetCourse) return res.status('404').send('没有该课程!');
	const index = courses.indexOf(targetCourse);
	courses.splice(index, 1);
	res.send(targetCourse);
});

module.exports = router;