"use strict";
document.addEventListener("DOMContentLoaded", () => {
	//Retrieving elements from the DOM
	const hamMenu = document.getElementById("hamburger");
	const menu = document.getElementById("menu"); //Contains the hidden class
	const closeBtn = document.getElementById("close-btn");

	const modalFn = function () {
		//This function removes the hidden class from the menu
		const showMenu = function () {
			menu.classList.remove("hidden");
		};

		//The function is added to the hamburger menu to display the menu
		hamMenu.addEventListener("click", showMenu); //Open button functionality

		//This function adds hidden class to menu if menu does not have hidden class already
		const closeMenu = function () {
			menu.classList.add("hidden");
		};

		closeBtn.addEventListener("click", closeMenu); //Close button functionality
	};
	modalFn();

	//Accordion Logic
	const accordionHeaders = document.querySelectorAll(".accordion-header");
	//Selecting all accordion-header elements at the same time
	accordionHeaders.forEach((header) => {
		//attaching an event handler to each of the accordion headers
		header.addEventListener("click", () => {
			const accordionBody = header.nextElementSibling; //Grabing the next sibling elements and then assign to the accordionBody variable
			const accordionIcon = header.querySelector(".add-icon"); //This selects the accordion-icon within the header i.e the accordion icon is within the header

			//Checking if the accordion body has height, if it does then the accordion body is collasped
			if (accordionBody.style.maxHeight) {
				accordionBody.style.maxHeight = null; // Collapse
				accordionIcon.textContent = "+";
			} else {
				accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"; // Expand
				accordionIcon.textContent = "-";
			}
		});
	});

	//Overlay chat logic implementation
	const overlayChat = function () {
		const chatModal = document.querySelector(".chat-modal"); //Contains the "hidden" class
		const chatMsgBtn = document.querySelector(".chat-modal-btn"); //open button
		const closeChatBtn = document.querySelector(".close-chat-btn"); //close button

		//display chat overlay Function
		const displayChatOverlay = function () {
			chatModal.classList.remove("hidden");
		};

		//Close modal chat
		const closeChatOverlay = function () {
			chatModal.classList.add("hidden");
		};

		//Function for "ESCAPE"  key functionality
		const escapeKeyFn = function (e) {
			//If the key pressed is the same as the "Escape" and the chatModal does not have the "hidden" class then close the chatModal
			if (e.key === "Escape" && !chatModal.classList.contains("hidden")) {
				closeChatOverlay();
			}
		};

		chatMsgBtn.addEventListener("click", displayChatOverlay); //Display chat overlay
		closeChatBtn.addEventListener("click", closeChatOverlay); //Close chat overlay
		document.addEventListener("keydown", escapeKeyFn); //Attaching an event handler(escapeKeyFn) to the document
	};
	overlayChat();
});







