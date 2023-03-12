"use strict";

const passwordIconEye = document.querySelector(".fa-eye");
const passwordIconEyeSlash = document.querySelector(".fa-eye-slash");

const handleClick = function () {
  const passwordInput = document.querySelector(".password__input");
  if (passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text");
    passwordIconEyeSlash.classList.add("block");
    passwordIconEye.classList.add("none");
  } else {
    passwordInput.setAttribute("type", "password");
    passwordIconEyeSlash.classList.remove("block");
    passwordIconEye.classList.remove("none");
  }
};

passwordIconEye.addEventListener("click", handleClick);
passwordIconEyeSlash.addEventListener("click", handleClick);
