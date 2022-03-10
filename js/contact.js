const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("button");
const sentMessage = document.querySelector("#sentMessage");

function validateForm(event) {
  event.preventDefault();

  let formIsValid = true;

  if (checkLength(fullName.value, 4) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    formIsValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    formIsValid = false;
  }

  if (checkLength(subject.value, 14) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    formIsValid = false;
  }

  if (checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    formIsValid = false;
  }

  if (formIsValid === true) {
    sentMessage.innerHTML = `<h3>Message sent</h3>`;
  } else {
    sentMessage.innerHTML = "";
  }
}
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
