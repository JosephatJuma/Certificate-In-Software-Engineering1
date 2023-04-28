const express = require("express");
const router = express.Router();
const registerModel = require("../models/register");
router.get("/", (req, res) => {
  res.render("register.pug");
});
router.post("/", async (req, res) => {
  const newCustomer = new registerModel(req.body);
  newCustomer
    .save()
    .then(() => {
      res.render("register.pug", {
        message: "Form has been submited successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
