const { Student } = require("../models/studentModel");
const { School } = require("../models/schoolModel");
const { Board } = require("../models/boardModel");

exports.GETAllStudents = async (req, res, next) => {
  const allStudents = await Student.find({});
  res.status(200).json({
    status: 200,
    result: {
      quantity: allStudents.length,
      data: allStudents,
    },
  });
};

exports.GETStudent = async (req, res, next) => {
  const student = await Student.findOne({ _id: req.params.id });
  res.status(200).json({
    status: 200,
    result: {
      message: "this is the info about one student",
      data: student,
    },
  });
};

exports.POSTStudent = async (req, res, next) => {
  const school = await School.findById(req.body.schoolId);
  const newStudent = await Student.create({
    name: req.body.name,
    email: req.body.email,
    schoolName: school.schoolName,
  });

  res.status(200).json({
    status: 200,
    result: {
      data: newStudent,
    },
  });
};

exports.PUTStudent = async (req, res, next) => {
  const school = await School.findOne({ _id: req.body.schoolId });
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      school: school._id,
    },
    { new: true }
  );
  res.status(200).json({
    status: 200,
    result: {
      data: updatedStudent,
    },
  });
};

exports.DELETEStudent = async (req, res, next) => {
  const student = await Student.deleteOne({ _id: req.params.id });
  res.status(200).json({
    status: 200,
    result: "deleted",
  });
};
