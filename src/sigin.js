'use strict';

//////////////////SIGN-IN LOGIN IMPLEMENTATION///////////////////////
const siginForm = document.getElementById("signin-form");
const emailInput = document.getElementById("email");/* Input */
const passwordInput = document.getElementById("password");/* Input */


const showSuccessMessage = document.querySelector(".show-success-message");//Success message
const loginSuccessfulIcon = document.getElementById("display-success-icon"); //Display a successful message after all the criteria are met
const showSuccessIcons = document.querySelectorAll(".show-success-icon");//Success icons
const showErrorIcons = document.querySelectorAll(".show-error-icon");//Error icons
const errorMessage = document.querySelectorAll(".show-error-message");//Error message

//Event Listener
siginForm.addEventListener("submit", (e) => {
	e.preventDefault();
    validateForm();//calling the validate function
});


////Form validation logic
const validateForm = function(){

   //Email Address
   if(emailInput.value.trim() === ''){
      setError(0, "Email cannot be blank");
   }
   else if(!isEmailValid(emailInput.value.trim())){
      setError(0, "Provide a valid email address");
   }
   else{
     setSuccess(0);
   }
 

   //Password
   if(passwordInput.value.trim() === ''){
      setError(1, 'Password field cannot be blank');
   }
   else if(!isPasswordValid(passwordInput.value.trim())){
       setError(1, "Password must include upper and lowercase letters, numbers, and special characters.");
    }
    else{
        setSuccess(1)
    }

  
}





//SET-ERROR FUNCTION
const setError = function (i, displayErrorMessage){
    errorMessage[i].textContent = displayErrorMessage;
    errorMessage[i].style.color = "red";
    showErrorIcons[i].style.opacity = 1;
    showSuccessIcons[i].style.opacity = 0;
}



//SET-SUCCESS FUNCTION
const setSuccess = function (i){
    showErrorIcons[i].style.opacity = 0;
	showSuccessIcons[i].style.opacity = 1;
    errorMessage[i].textContent = ""; //Clear error message when the inputs are valid
};





//EMAIL REGEX FUNCTION
const isEmailValid = function (email){
   const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return regEmail.test(email);
}



//PASSWORD FUNCTION: Checking if the user's password matches the regex standard
const isPasswordValid = function (password) {
	const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?/-]).{8,}$/;
	return regexPassword.test(password);
};