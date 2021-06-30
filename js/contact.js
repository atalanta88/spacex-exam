const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

const submitMessage = document.querySelector("#submitMessage");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("The form was submitted");

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;
  let firstNameHasError = false;

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
    firstNameHasError = false;
  } else {
    firstNameError.style.display = "block";
    firstNameHasError = true;
  }

  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;
  let lastNameHasError = false;

  if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
    lastNameHasError = false;
  } else {
    lastNameError.style.display = "block";
    lastNameHasError = true;
  }

  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subjectError");
  const subjectValue = subject.value;
  let subjectHasError = false;

  if (checkInputLength(subjectValue) === true) {
    subjectError.style.display = "none";
    subjectHasError = false;
  } else {
    subjectError.style.display = "block";
    subjectHasError = true;
  }

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;
  let messageHasError = false;

  if (checkInputLength(messageValue) === true) {
    messageError.style.display = "none";
    messageHasError = false;
  } else {
    messageError.style.display = "block";
    messageHasError = true;
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  let emailHasError = false;
  let invalidEmailHasError = false;

  const emailValue = email.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
    emailHasError = false;
  } else {
    emailError.style.display = "block";
    emailHasError = true;
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
    invalidEmailHasError = false;
  } else {
    invalidEmailError.style.display = "block";
    invalidEmailHasError = true;
  }

  // decide whether to display the submitted message
  if (
    firstNameHasError === true ||
    lastNameHasError === true ||
    subjectHasError === true ||
    messageHasError === true ||
    emailHasError === true ||
    invalidEmailHasError === true
  ) {
    submitMessage.style.display = "none";
  } else {
    submitMessage.style.display = "block";
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
