// JavaScript code for form validation
// Prevent form from submitting   form id = "myForm"

// Retrieve the input field value
form = document.getElementById("myForm");
form.addEventListener("submit", checkPattern);
function checkPattern(event) {
  let inputAlphNum = document.getElementById("inputField").value; 
  let pattern = /^[a-zA-Z0-9]+$/;
  if (inputAlphNum.match(pattern)){
    window.alert("Your alphanumeric input is valid.");
  } else{
    event.preventDefault();
    window.alert("Your input is invalid.");
  }
}
// Regular expression pattern for alphanumeric input

// Check if the input value matches the pattern
 
// Valid input: display confirmation and submit the form

// Invalid input: display error message
