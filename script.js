"use strict";

// header
const header = document.querySelector(".container");
// modal
const logInBtn = document.querySelectorAll(".btn");
const modalWindow = document.querySelector(".modal-window");
const modalCrossBtn = document.querySelector(".modal-icon");
// hero
const hero = document.querySelector(".hero");

// 👉👉👉👉👉 calculate Hero section left margin
function reportWindowSize() {
  hero.style.marginLeft = getComputedStyle(header)["margin-left"];
}
reportWindowSize();
window.addEventListener("resize", reportWindowSize);

// ///// 👉👉👉👉👉 Open modal functionality

logInBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    modalWindow.classList.add("open-modal");
    document.querySelector("main").style.filter = `blur(3px)`;
    document.querySelector("header").style.filter = `blur(3px)`;
  });
});

modalCrossBtn.addEventListener("click", function (e) {
  modalWindow.classList.remove("open-modal");
  document.querySelector("main").style.filter = `blur(0px)`;
  document.querySelector("header").style.filter = `blur(0px)`;
});
