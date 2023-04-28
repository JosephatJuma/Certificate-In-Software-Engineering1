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
      res.send(req.body);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
