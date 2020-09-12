const express = require("express");
const router = express.Router();

const { schoolJoiSchema } = require("../models/schoolModel");
const validate = require("../middleware/validate")(schoolJoiSchema);

//
const schoolApiController = require("../controllers/schoolApiController");

router
  .route("/")
  .get(schoolApiController.GETAllSchools)
  .post(validate, schoolApiController.POSTSchool);

router
  .route("/:id")
  .get(schoolApiController.GETSchool)
  .put(validate, schoolApiController.PUTSchool)
  .delete(schoolApiController.DELETESchool);

module.exports = router;
