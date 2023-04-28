const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const config = require("./db/config");

//connect controller to db
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
try {
  db.once("open", () => {
    console.log("connected to db");
  });
} catch (error) {
  console.log("Error");
}
//the routes
const registerRoute = require("./routes/register");
app.use(bodyParser.urlencoded({ extended: true })); //allow body-parser
//setting a templating engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); //set public dir for assests
app.use("/", registerRoute);

app.listen(5000, "localhost", () => {
  console.log("App runnings on port 5000");
});
