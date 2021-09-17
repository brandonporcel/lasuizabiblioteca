const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const AdminSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
		},
	},

	{
		collection: 'users',
		timestamps: true,
	}
);

AdminSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

AdminSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};
module.exports = model('Admin', AdminSchema);