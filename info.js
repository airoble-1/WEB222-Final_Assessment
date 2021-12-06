// First name: Must start with a cap and only alphabet allowed.

//  Last name: Must start with a cap and only alphabet allowed.

// Password: must be at least 6 characters long, must start with an alphabet,
// must have at least 1 digit and 1 uppercase.
// The password strings must match.
// Pattern attribute is not allowed for this field

// Username: username must start with an alphabet, must have at least 6 characters.
// Pattern attribute is not allowed for this field.
var fname = document.querySelector("#first-name")
var lname = document.querySelector("#last-name")
var password1 = document.querySelector("#pass")
var password2 = document.querySelector("#confirm-pass")
var username = document.querySelector("#username")
var radio_btns = document.signup.userEducation
function validatePassword() {
  var isValid = false
  if (password1.value.trim().length < 6) {
    alert("Password must contain atleast 6 characters!")
    return isValid
  }
  let re = /^[a-zA-Z]/
  if (!re.test(password1.value.trim())) {
    alert("Password must start with an alphabet!")
    return isValid
  }
  re = /[0-9]/
  if (!re.test(password1.value.trim())) {
    alert("Password must have 1 digit!")
    return isValid
  }
  re = /[A-Z]/
  if (!re.test(password1.value.trim())) {
    alert("Password must have 1 uppercase!")
    return isValid
  }
  if (password1.value.trim() !== password2.value.trim()) {
    alert("Passwords do not match!")
    return isValid
  }
  return (isValid = true)
}

function validateName() {
  isValid = false
  var regName = /^[A-Z]+[a-zA-Z]+$/
  if (regName.test(fname.value.trim()) && regName.test(lname.value.trim())) {
    alert("Valid name given.")
    isValid = true
  } else {
    alert("Invalid name given.")
  }
  return isValid
}

function educationChecked() {
  var count = 0
  for (var i = 0; i < radio_btns.length; i++) {
    if (radio_btns[i].checked == true) {
      count++
    }
  }
  if (count === 0) alert("Must select an education")
  return count
}

function validateUsername() {
  isValid = false
  var regUser = /^[a-zA-Z][a-zA-Z0-9]{6,}$/
  if (!regUser.test(username.value.trim())) {
    alert(
      "username must start with an alphabet and have at least 6 characters!"
    )
    return isValid
  }
  return true
}
var resetBtn = document.signup.resetBtn
function clearForm() {
  fname, lname, password1, username, (password2 = "")
}

function validate() {
  var isValid = false
  if (
    !educationChecked() ||
    !validateName() ||
    !validatePassword() ||
    !validateUsername()
  )
    return isValid
  alert("Form Submission Sucess!")
  return (isValid = true)
}
