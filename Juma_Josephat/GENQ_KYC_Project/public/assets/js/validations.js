const indictateErr = () => {
  document.getElementById("first_name").style.borderColor = "red";
  document.getElementById("last_name").style.borderColor = "red";
  document.getElementById("gender").style.borderColor = "red";
  document.getElementById("date_of_birth").style.borderColor = "red";
  document.getElementById("country").style.borderColor = "red";
  document.getElementById("state").style.borderColor = "red";
  document.getElementById("phone1").style.borderColor = "red";
  document.getElementById("zip").style.borderColor = "red";
  document.getElementById("phone2").style.borderColor = "red";
  document.getElementById("town").style.borderColor = "red";
  document.getElementById("email").style.borderColor = "red";
};

const indictateValid = () => {
  document.getElementById("first_name").style.borderColor = "green";
  document.getElementById("last_name").style.borderColor = "green";
  document.getElementById("gender").style.borderColor = "green";
  document.getElementById("date_of_birth").style.borderColor = "green";
  document.getElementById("country").style.borderColor = "green";
  document.getElementById("state").style.borderColor = "green";
  document.getElementById("phone1").style.borderColor = "green";
  document.getElementById("zip").style.borderColor = "green";
  document.getElementById("phone2").style.borderColor = "green";
  document.getElementById("town").style.borderColor = "green";
  document.getElementById("email").style.borderColor = "green";
};

const validateForm = () => {
  //regular expressions
  name_regulat_exp = /^([^0-9]*)$/;

  let input;
  let err;

  // validate first name
  let first_name = document.forms["register_form"]["first_name"].value;
  input = document.getElementById("first_name");
  err = document.getElementById("fnameErr");
  if (first_name.length <= 2 || first_name.length > 255) {
    input.focus();
    indictateErr();
    err.textContent =
      "Name must be at leaset two characters long and must not exceed 255 characters!";

    return false;
  } else if (name_regulat_exp.test(first_name) === false) {
    indictateErr();
    input.focus();
    err.textContent = "First name should not contain numbers";
    return false;
  }
  input.style.borderColor = "";
  err.textContent = "";

  //validate Last name
  let last_name = document.forms["register_form"]["last_name"].value;
  input = document.getElementById("last_name");
  err = document.getElementById("lnameErr");
  if (last_name.length <= 2 || last_name.length > 255) {
    indictateErr();
    input.focus();
    input.style.borderColor = "red";
    err.textContent =
      "Last name must be at leaset two characters long and must not exceed 255 characters!";
    return false;
  } else if (name_regulat_exp.test(last_name) === false) {
    indictateErr();
    input.focus();
    err.textContent = "Last name should not contain numbers";
    return false;
  }
  input.style.borderColor = "";
  err.textContent = "";
  let date = document.forms["register_form"]["date_of_birth"];
  let current = new Date();

  //   if (current.getFullYear() - date.year < 18) {
  //     alert("Customer must be 18 years and above");
  //   }
  let address = document.forms["register_form"]["district"];
  indictateValid();
  return true;
};

const hideMessage = () => {
  document.getElementById("success-alert").innerHTML = "";
};
