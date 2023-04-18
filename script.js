const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const passwordConfirmation = document.getElementById("pass-confirm");
const sendingFormMessage = document.querySelector(".validation");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  let numbersOfValidInputs = form.querySelectorAll(".form-control.success");
  if (numbersOfValidInputs.length === 4) {
    sendingFormMessage.style.display = "block";
    setTimeout(function () {
      form.submit();
    }, 2000);
  }
});

function checkInputs() {
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let passConfirmationValue = passwordConfirmation.value.trim();

  if (userNameValue === "") {
    setErrorFor(userName, "Username cannot be blank");
  } else {
    setSuccessFor(userName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Password must contain at least six chars");
  } else {
    setSuccessFor(password);
  }

  if (passConfirmationValue === "") {
    setErrorFor(
      passwordConfirmation,
      "Password confirmation input cannot be blank"
    );
  } else if (passConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "Passwords does not match");
  } else {
    setSuccessFor(passwordConfirmation);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(?=.{1,256})(?=.{1,64}@)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(email);
}
