'use strict';

//HOSPITAL SIGN UP LOGIC IMPLEMENTATION
document.addEventListener("DOMContentLoaded", () => {
	const showErrorIcon = document.getElementsByClassName("show-error-icon"); //Returns a nodelist
	const showSuccessIcon = document.getElementsByClassName("show-success-icon"); //Returns a nodelist
	const showErrorMessage =
		document.getElementsByClassName("show-error-message"); //Returns a nodelist

	const hospitalInput = document.getElementById("hospital");
	const licenseInput = document.getElementById("license");
	const userPhoneInput = document.getElementById("phone");
	const userEmailInput = document.getElementById("email");
	const userPasswordInput = document.getElementById("password");
	const userConfirmPasswordInput = document.getElementById("c-password");
	const hospitalBtn = document.getElementById("hospital-form-btn");
	const formHospital = document.getElementById("form-hospital");

	//Event Listener
	formHospital.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log("LOGIN");

		validateForm(); //Calling the validation function
	});

	//FORM VALIDATION
	const validateForm = function () {
		// HOSPITAL NAME
		if (hospitalInput.value.trim() === "") {
			setError(0, "Hospital name cannot be blank");
		} else if (
			hospitalInput.value.trim().length < 2 ||
			hospitalInput.value.trim().length > 15
		) {
			setError(0, "Hospital name must be min 2 and max 15 characters");
		} else {
			setSuccess(0);
		}

		// REGISTRATION NUMBER
		if (licenseInput.value.trim() === "") {
			setError(1, "Registration number cannot be blank");
		} else if (licenseInput.value.trim().length !== 10) {
			setError(1, "Registration number must be 10 characters");
		} else {
			setSuccess(1);
		}

		// MOBILE NUMBER
		if (userPhoneInput.value.trim() === "") {
			setError(2, "Mobile number cannot be blank");
		} else if (
			userPhoneInput.value.trim().length < 10 ||
			userPhoneInput.value.trim().length > 15
		) {
			setError(2, "Mobile number must be min 10 and max 15");
		} else if (!isMobileNumberValid(userPhoneInput.value.trim())) {
			setError(2, "Provide a valid mobile number");
		} else {
			setSuccess(2);
		}

		// EMAIL
		if (userEmailInput.value.trim() === "") {
			setError(3, "Email cannot be blank");
		} else if (!isEmailValid(userEmailInput.value.trim())) {
			setError(3, "Provide a valid email address");
		} else {
			setSuccess(3);
		}

		// PASSWORD
		if (userPasswordInput.value.trim() === "") {
			setError(4, "Password field cannot be blank");
		} else if (
			userPasswordInput.value.trim().length < 6 ||
			userPasswordInput.value.trim().length > 15
		) {
			setError(4, "Password must be min 6 and max 15");
		} else if (!isPasswordValid(userPasswordInput.value.trim())) {
			setError(
				4,
				"Password must include upper and lowercase letters, numbers, and special characters."
			);
		} else {
			setSuccess(4);
		}

		// CONFIRM PASSWORD
		if (userConfirmPasswordInput.value.trim() === "") {
			setError(5, "Password field cannot be blank");
		} else if (
			userPasswordInput.value.trim() !== userConfirmPasswordInput.value.trim()
		) {
			setError(5, "Passwords do not match");
		} else {
			setSuccess(5);
		}
	};

	//EMAIL FUNCTION: Checking if the user's email matches the regular expression standard
	const isEmailValid = function (email) {
		const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return regEmail.test(email);//Testing the email if it's valid... This returns TRUE or FALSE
	};

	//MOBILE NUMBER FUNCTION: Checking if the user's number matches the  regular expression standard
	const isMobileNumberValid = function (mobileNumber) {
		const regMobileNumber = /^\+?[0-9]{10,15}$/;
		return regMobileNumber.test(mobileNumber);//Testing the number if it's valid...  
	};

	//PASSWORD FUNCTION: Checking if the user's password matches the regular expression standard
	const isPasswordValid = function (password) {
		const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?/-]).{8,}$/;
		return regexPassword.test(password);//Testing the email if it's valid... This returns TRUE or FALSE
	};


	//ERROR FUNCTION
	const setError = function (i, errorMessage) {
		showErrorMessage[i].textContent = errorMessage;
		showErrorMessage[i].style.opacity = 100;
		showErrorMessage[i].style.color = "red";
		showErrorIcon[i].style.opacity = 100;
		showSuccessIcon[i].style.opacity = 0;
	};

	//SUCCESS FUNCTION
	const setSuccess = function (i, successMessage) {
		//showErrorMessage[i].textContent = successMessage;
		showErrorMessage[i].style.opacity = 0;
		showErrorIcon[i].style.opacity = 0;
		showSuccessIcon[i].style.opacity = 100;
		showErrorMessage[i].textContent = "";
	};
});


