const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// function error
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
// function succes
const showSucces = input => {
  const formControl = input.parentElement;
  formControl.className = "form-control succes";
};

// function check email
const checkEmail = input => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Email is not valid");
  }
};

const checkRequiered = inputArr => {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
};

// check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less then ${max} characters`
    );
  } else {
    showSucces(input);
  }
};

// check passwords match
const checkPassWordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
};

const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
// eventlisteners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequiered([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 12);
  checkEmail(email);
  checkPassWordsMatch(password, password2);
});
