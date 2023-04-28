const validateForm = () => {
  //regular expressions
  name_regulat_exp = /^([^0-9]*)$/;

  let input;
  let err;
  let first_name = document.forms["register_form"]["first_name"].value;
  input = document.getElementById("first_name");
  err = document.getElementById("fnameErr");
  if (first_name.length <= 2 || first_name.length > 255) {
    input.style.borderColor = "red";
    err.textContent =
      "Name must be at leaset two characters long and must not exceed 255 characters!";
    return false;
  } else if (name_regulat_exp.test(first_name) === false) {
    err.textContent = "Name should not contain numbers";
    return false;
  }
};
