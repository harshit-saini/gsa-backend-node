const mongoose = require("mongoose");

const schoolSchema = require("./schoolModel");
const boardSchema = require("./boardModel");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

// **** joi schema
const studentJoiSchema = Joi.object({
  name: Joi.string().required().min(3).max(16),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  schoolId: Joi.objectId(),
});

// **** exports
exports.Student = Student;
exports.studentJoiSchema = studentJoiSchema;
