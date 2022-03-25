"use strict";

const header = document.querySelector(".container");
const hero = document.querySelector(".hero");

function reportWindowSize() {
  hero.style.marginLeft = getComputedStyle(header)["margin-left"];
}
reportWindowSize();
window.addEventListener("resize", reportWindowSize);

// ///// 👉👉👉👉👉 Open modal functionality
const logInBtn = document.querySelectorAll(".btn");
const modalWindow = document.querySelector(".modal-window");
const modalIconBtn = document.querySelector(".modal-icon");

logInBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    modalWindow.classList.add("open-modal");
    document.querySelector("main").style.filter = `blur(3px)`;
    document.querySelector("header").style.filter = `blur(3px)`;
  });
});
modalIconBtn.addEventListener("click", function (e) {
  modalWindow.classList.remove("open-modal");
  document.querySelector("main").style.filter = `blur(0px)`;
  document.querySelector("header").style.filter = `blur(0px)`;
});
