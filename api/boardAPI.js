const express = require("express");
const router = express.Router();

const { boardJoiSchema } = require("../models/boardModel");
const validate = require("../middleware/validate")(boardJoiSchema);

//
const boardApiController = require("../controllers/boardApiController");

router
  .route("/")
  .get(boardApiController.GETAllBoards)
  .post(validate, boardApiController.POSTboard);

router
  .route("/:id")
  .get(boardApiController.GETBoard)
  .put(validate, boardApiController.PUTBoard)
  .delete(boardApiController.DELETEBoard);

module.exports = router;
