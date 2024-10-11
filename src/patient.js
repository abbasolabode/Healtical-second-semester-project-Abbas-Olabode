'use strict';

//IMPLEMENTING SIGN UP LOGIC
document.addEventListener("DOMContentLoaded", () => {
   const errorIcons = document.querySelectorAll(".error-icon");
const successIcons = document.querySelectorAll(".success-icon");
const errorParagraphsMsg = document.querySelectorAll(".error-message");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("comfirm-password");
const emailInput = document.getElementById("email");
const mobileNumber = document.getElementById("phone-number");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const form = document.getElementById("form");



//Implementing sign Up Form
form.addEventListener("submit", (e) => {
	e.preventDefault(); // Prevent form submission
	console.log('LOGIN');
    validateForm(); // Call the validateForm function in the eventHandler function
});

const validateForm = function () {
	// FIRST NAME: index 0
	if (firstNameInput.value.trim() === "") {
		setError(0, "First name cannot be blank");
	} 
	else if (firstNameInput.value.trim().length < 2 ||firstNameInput.value.trim().length > 15) {
		setError(0, "First name must be min 2 and max 15 characters");
	} 
	else {
		setSuccess(0); // First name is valid
	}


	// LAST NAME: index 1
	if (lastNameInput.value.trim() === "") {
		setError(1, "Last name cannot be blank");
	} 
	else if (lastNameInput.value.trim().length < 2 || lastNameInput.value.trim().length > 15){
		setError(1, "Last name must be min 2 and max 15 characters");
	} 
	else {
		setSuccess(1); // Last name is valid
	}

	//MOBILE NUMBER: index 2
	if (mobileNumber.value.trim() === "") {
		setError(2, "Please input your mobile number");
	} 
	else if (mobileNumber.value.trim().length < 10 || mobileNumber.value.trim().length > 15) 
	{
		setError(2, "Mobile number must be min 10 and max 15 characters");
	} 
	else if (!isMobileNumberValid(mobileNumber.value.trim())) {
		setError(2, "Provide a valid mobile number");
	} 
	else {
		setSuccess(2);
		//console.log('LOGIN');
	}

	//EMAIL ADDRESS: index 3
	if (emailInput.value.trim() === "") {
		setError(3, "Email address cannot be blank");
	} 
	else if (isEmailValid(emailInput.value.trim())) {
		setSuccess(3);
	} 
	else {
		setError(3, "Provide email address")
	}
	//PASSWORD: index 4
	if (passwordInput.value.trim() === "") {
		setError(4, "Password cannot be empty");
	} else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
		setError(4, "Password min 6 and max 20 characters");
	} 
	else {
		setSuccess(4);
	}

	//COMFIRM PASSWORD: index 5
	if (confirmPasswordInput.value.trim() === "") {
		setError(5, "Password cannot be empty");
	} 
	else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
		setError(5, "Passwords do not match");
	} 
	else {
		setSuccess(5);
	}
};



//EMAIL FUNCTION
const isEmailValid = function (email) {
	const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regEmail.test(email); //Testing the email if it's valid
};

//MOBILE NUMBER FUNCTION
const isMobileNumberValid = function (mobileNumber) {
	const regMobileNumber = /^\+?[0-9]{10,15}$/;
	return regMobileNumber.test(mobileNumber); //Testing the number if it's valid
};

// SET ERROR FUNCTION
const setError = function (i, errorMessage) {
	// Select the appropriate error message and icon based on the index
	errorParagraphsMsg[i].textContent = errorMessage;
	errorParagraphsMsg[i].style.opacity = 100;
	errorParagraphsMsg[i].style.color = "red";
	errorIcons[i].style.opacity = 100; // Show error icon
	successIcons[i].style.opacity = 0; // Hide success icon
};

// SET SUCCESS FUNCTION
const setSuccess = function (i) {
	// Set success message and icons
	errorParagraphsMsg[i].style.opacity = 0;
	successIcons[i].style.opacity = 100; //Show success icon
	errorIcons[i].style.opacity = 0; // Hide error icon
    errorParagraphsMsg[i].textContent = "";
};
});




