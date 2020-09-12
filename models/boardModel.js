const mongoose = require("mongoose");
const Joi = require("joi");

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

const Board = mongoose.model("Board", boardSchema);

// **** joi schema
const boardJoiSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().min(6).max(6).required(),
});

// **** exports
exports.Board = Board;
exports.boardSchema = boardSchema;
exports.boardJoiSchema = boardJoiSchema;
