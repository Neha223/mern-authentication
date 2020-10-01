const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.registerUser = (req, res, next) => {
	console.log('request body==',req.body);
	let user = new User({
        name: req.body.name,
        email: req.body.email
	});
	user.hashedPassword = user.generateHash(req.body.password);
	user.save((err, result) => {
		if (err) {
			console.log('err===',err);
			return res.status(400).json({message: 'Some Error Occured!'});
		}
		res.status(200).json({
			message: 'New user registered successfully!'
		});
	});
};
exports.loginUser = (req,res,next) => {
	User.findOne({ email: req.body.email }, (err, user) => {
		if (err || !user) {
			return res.status(401).json({
				error: 'User not found'
			});
		}
		if (!user.validPassword(req.body.password)) {
			return res.status(401).json({
				error: 'Wrong Email or Password!'
			});
		}

		const token = jwt.sign(
			{
				_id: user._id
			},
			config.jwtSecret
		);

		return res.json({
			token,
			user: { _id: user._id, name: user.name, email: user.email }
		});
	});
}

