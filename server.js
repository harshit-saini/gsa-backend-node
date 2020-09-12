const express = require("express");
const app = express();
const CORS = require("cors");

// **** Setting env variables for development
if (process.env.NODE_ENV != "production") require("dotenv").config();

// **** Connecting to database
require("./utils/connectToMongoDB");
app.use(CORS());
app.use(express.json());

//
app.use("/api/v1/school", require("./api/schoolAPI"));
app.use("/api/v1/board", require("./api/boardAPI"));
app.use("/api/v1/student", require("./api/studentAPI"));

// **** Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is running at PORT : ${PORT}`);
});
