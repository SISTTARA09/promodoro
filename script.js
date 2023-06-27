"use strict";
const cl = console.log;

// GET THE ELEMENTS
const buttonsParent = document.querySelector(".buttons-parent");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
// ADD THE EVENT LISTENER TO THE BUTTONS
buttonsParent.addEventListener("click", (ev) => {
	let target = ev.target;
	if (target == start) {
		if (minutes.textContent == "25") {
			+minutes.textContent--;
		}
		seconds.textContent = seconds.dataset.end;
		// WORK WITH SECONDS
		let secondsCounter = setInterval(() => {
			+seconds.textContent--;
			if (seconds.textContent == "0") {
				//WORK WITH MINUTES
				+minutes.textContent--;
					if (minutes.textContent == '0' && minutes.style.color == 'rgb(238, 17, 17)') {
						cl(true)
						setTimeout(() => {
							$(minutes).css('color', '#1177ee')
							minutes.textContent = minutes.dataset.continue;
						}, 58000);
				} 
				if (minutes.textContent == "24") minutes.setAttribute("data-rest", "5");
				seconds.dataset.end = "59";
				seconds.textContent = seconds.dataset.end;
			}
			if (minutes.textContent == "0" && seconds.textContent == '1') {
				minutes.textContent = minutes.dataset.rest;
				$(minutes).css('color', '#ee1111')
				minutes.removeAttribute("data-rest");
				minutes.dataset.continue = "24";
			}
			// cl(minutes.style.color)
		}, 100);
		// WORK WITH PAUSE
		pause.addEventListener("click", (ev) => {
			clearInterval(secondsCounter);
			if (seconds.textContent != '00') {
				seconds.dataset.end = seconds.textContent;
			}
			$(start).fadeIn();
			$(pause).hide()
			$(reset).fadeIn()
			minutes.dataset.continue = minutes.textContent;
		});
		// WORK WITH RESET
		reset.addEventListener("click", (ev) => {
			seconds.dataset.end = "59";
			seconds.textContent = "00";
			minutes.dataset.continue = "25";
			minutes.textContent = "25";
			clearInterval(secondsCounter);
			$(start).fadeIn();
			$(pause).hide()
			$(reset).hide()
		});
		$(start).hide()
		$(pause).fadeIn(600)
		$(reset).hide()
	}
});