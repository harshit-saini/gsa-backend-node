const { Board } = require("../models/boardModel");
const { appError } = require("../utils/appError");

exports.GETAllBoards = async (req, res, mext) => {
  try {
    const allBoards = await Board.find({});
    res.status(200).json({
      status: 200,
      result: {
        quantity: allBoards.length,
        message: "these are all the boards registered ",
        data: allBoards,
      },
    });
  } catch (error) {
    return next(new AppError(error, 400));
  }
};

exports.GETBoard = async (req, res, next) => {
  const board = await Board.findOne({ _id: req.params.id });

  if (!board)
    return res.status(404).send("the board with the given id was not found");

  res.status(200).json({
    status: 200,
    result: {
      message: "this is the info about one board",
      data: board,
    },
  });
};

exports.POSTboard = async (req, res, next) => {
  const newBoard = await Board.create({
    name: req.body.name,
    code: req.body.code,
  });

  res.json({
    status: 200,
    result: {
      message: "board added",
      data: newBoard,
    },
  });
};

exports.PUTBoard = async (req, res, next) => {
  const updatedBoard = await Board.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      code: req.body.code,
    },
    { new: true }
  );

  if (!updatedBoard)
    return res.status(404).send("ther is no board with the given id");

  res.status(200).json({
    status: 200,
    result: {
      message: "board updates",
      data: updatedBoard,
    },
  });
};

exports.DELETEBoard = async (req, res, next) => {
  try {
    const deletedBoard = await Board.findByIdAndRemove(req.params.id);

    if (!deletedBoard)
      return res.status(404).send("the board with the given id was not found");

    res.status(200).json({
      status: 200,
      result: {
        message: "board deleted",
        data: deletedBoard,
      },
    });
  } catch (error) {
    next(new Error(error));
  }
};
