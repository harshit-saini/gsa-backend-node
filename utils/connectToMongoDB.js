const mongoose = require("mongoose");
const connection = mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`Connected to the database`))
  .catch((error) => console.log(error));

module.exports = connection;
