const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let userSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'User Name is required'
	},
	email: {
		type: String,
		trim: true,
		unique: 'Email already exists',
		match: [/.+\@.+\..+/, 'Please fill a valid email address'],
		required: 'Email is required'
	},
	hashedPassword: {
		type: String,
		required: 'Password is required'
	}
});
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// checking if password is valid
userSchema.methods.validPassword = function (password) {
    console.log('password==',password,this.hashedPassword);
    return bcrypt.compareSync(password, this.hashedPassword);
};

module.exports = mongoose.model('Users', userSchema);