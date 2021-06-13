/**
 * check() checks data inside req.body & req.cookies & req.headers & erq.params & req.query
 * body() checks data inside req.body
 * param() hecks data inside req.params
 */
const { body, check, sanitize, checkSchema } = require('express-validator');
const validate = require('../middleware/validate');
const { User } = require('../model');

exports.register = validate([
	body('user.username')
		.notEmpty().withMessage('username should not be empty')
		.bail() // check if previous validations are all passed to continue further check
		.trim()
		.custom(async value => { // remember async & await when using mongoose!!!
			const user = await User.findOne({ username: value });
			if (user) {
				return Promise.reject('Duplicate username!');
			}
		}),

	body('user.password')
		.notEmpty().withMessage('password should not be empty')
		.isLength({ min: 5 }).withMessage('password must be longer than 5')
		.matches(/[a-zA-Z]\w{5,17}$/).withMessage('密码必须以字母开头，长度在6~18之间，只能包含字母、数字和下划线'),

	body('user.email')
		.notEmpty().withMessage('email should not be empty')
		.trim()
		.isEmail().withMessage('bad email address')
		.bail() // check if previous validations are all passed to continue further check
		.custom(async value => { // remember async & await when using mongoose!!!
			const email = await User.findOne({ email: value });
			if (email) {
				return Promise.reject('Duplicate user email!');
			}
		}),
	/*
		for input like:
		"address": [
			{ "postalCode": "2010", "number": "500" }
		]
		we can use:
			check('addresses.*.postalCode').isPostalCode(), // check all postalCode inside addresses
			sanitize('address.*.number').toInt() // make all number inside addresses become int
		*/
]);