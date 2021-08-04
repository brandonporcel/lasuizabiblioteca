const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		autor: { type: String, required: true },
		editorial: { type: String, required: true },
		quantity: { type: Number, required: true },
		shelf: { type: Number, required: true },
		stars: { type: Number, required: false },
	},
	{
		timestams: true,
	}
);
module.exports = model('Book', BookSchema);