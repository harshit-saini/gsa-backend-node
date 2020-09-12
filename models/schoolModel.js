const mongoose = require("mongoose");
const boardSchema = require("./boardModel");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  location: {
    // geo location can be set
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  board: {
    type: boardSchema,
    required: true,
  },
});

const School = mongoose.model("School", schoolSchema);

// **** joi schema
const schoolJoiSchema = Joi.object({
  schoolName: Joi.string().min(3).max(50).required(),
  location: Joi.string().required(),
  code: Joi.string().min(6).max(6).required(),
  boardId: Joi.objectId(),
});

// **** exports
exports.School = School;
exports.schoolSchema = schoolSchema;
exports.schoolJoiSchema = schoolJoiSchema;
