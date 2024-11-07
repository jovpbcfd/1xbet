"use strict";

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

function open() {
  mobileMenu.classList.add("open");
}

function close() {
  mobileMenu.classList.remove("open");
}

hamburger.addEventListener("click", () => {
  open();
});

closeMenu.addEventListener("click", () => {
  close();
});
