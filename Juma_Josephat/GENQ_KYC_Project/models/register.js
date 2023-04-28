const mongoose = require("mongoose");
const Register = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  date_of_birth: { type: String },
  gender: { type: String },
  country: { type: String },
  state: { type: String },
  town: { type: String },
  zip: { type: String },
  phone1: { type: String },
  phone2: { type: String },
  email: { type: String },
});
module.exports = mongoose.model("customer", Register);
