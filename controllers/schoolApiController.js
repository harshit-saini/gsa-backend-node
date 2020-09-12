const { School } = require("../models/schoolModel");
const { Board } = require("../models/boardModel");
const appError = require("../utils/appError");

exports.GETAllSchools = async (req, res, next) => {
  const allSchools = await School.find({});

  res.status(200).json({
    status: 200,
    result: {
      qunatity: allSchools.length,
      message: "here are all the schools registered",
      data: allSchools,
    },
  });
};

exports.GETSchool = async (req, res, next) => {
  const school = await School.findOne({ _id: req.params.id });
  res.status(200).json({
    status: 200,
    result: {
      message: "this is the info about one school",
      data: school,
    },
  });
};

exports.POSTSchool = async (req, res, next) => {
  try {
    const board = await Board.findById(req.body.boardId);
    console.log(board);
    const newSchool = await School.create({
      schoolName: req.body.schoolName,
      location: req.body.location,
      code: req.body.code,
      board: board.name,
    });
    res.status(200).json({
      status: 200,
      result: {
        message: "school added",
        data: newSchool,
      },
    });
  } catch (error) {
    return next(new appError("bad entry", 400));
  }
};

exports.PUTSchool = async (req, res, next) => {
  const board = await Board.findOne({ _id: req.body.boardId });
  const updatedSchool = await School.findOneAndUpdate(
    { _id: req.params.id },
    {
      schoolName: req.body.schoolName,
      location: req.body.location,
      code: req.body.code,
      boardId: board._id,
    },
    { new: true }
  );
  res.status(200).json({
    status: 200,
    result: {
      message: "school updated",
      data: updatedSchool,
    },
  });
};

exports.DELETESchool = async (req, res, next) => {
  const deletedSchool = await School.deleteOne({ _id: req.params.id });
  res.status(200).json({
    status: 200,
    result: {
      message: "school deleted",
      data: deletedSchool,
    },
  });
};
