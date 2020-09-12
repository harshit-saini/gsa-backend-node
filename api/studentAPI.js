const express = require("express");
const router = express.Router();

//
const studentApiController = require("../controllers/studentApiController");

const { studentJoiSchema } = require("../models/studentModel");
const validate = require("../middleware/validate")(studentJoiSchema);

router
  .route("/")
  .get(studentApiController.GETAllStudents)
  .post(validate, studentApiController.POSTStudent);

router
  .route("/:id")
  .get(studentApiController.GETStudent)
  .delete(studentApiController.DELETEStudent)
  .put(validate, studentApiController.PUTStudent);

module.exports = router;
