const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
//the routes
const registerRoute = require("./routes/register");

//setting a templating engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); //set public dir for assests
app.use("/register", registerRoute);
app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(5000, "localhost", () => {
  console.log("App runnings on port 5000");
});
