// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   if (username.value === localStorage.getItem("username") &&
//       password.value === localStorage.getItem("password")) {
//     alert("Login successful!");
//   } else {
//     // window.location.href = "signup.html";
//     alert("Sorry, The Username or Password You enter is incorrect")
//   }
// });
// const signupForm = document.querySelector('#signupForm');
// const loginForm = document.querySelector('#loginForm');
// const loginContainer = document.querySelector('#loginContainer');

// signupForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const email = signupForm.querySelector('#email').value;
//   const password = signupForm.querySelector('#pwd').value;

//   // Save user details in local storage
//   const users = JSON.parse(localStorage.getItem('users')) || [];
//   users.push({email, password});
//   localStorage.setItem('users', JSON.stringify(users));

//   // Show login form
//   signupForm.style.display = 'none';
//   loginContainer.style.display = 'block';
// });

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const email = loginForm.querySelector('#email').value;
//   const password = loginForm.querySelector('#pwd').value;

//   // Get users from local storage
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   // Check if the user exists
//   const user = users.find((user) => user.email === email && user.password === password);
//   if (user) {
//     // Direct user to the home page
//     window.location.href = 'home.html';
//   } else {
//     alert('Invalid email or password');
//   }
// });
const signUpBtn = document.getElementById("signUpBtn");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

signUpBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const user = {
    username: username.value,
    email: email.value,
    password: password.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Account created successfully!");
  window.location.href = "signup.html";
});

const loginBtn = document.getElementById("loginBtn");
form.addEventListener("loginBtn", function (event) {
  event.preventDefault();
  if (username.value === localStorage.getItem("email") &&
      password.value === localStorage.getItem("password")) {
    alert("Login successful!");
  } else {
    // window.location.href = "signup.html";
    alert("Sorry, The Username or Password You enter is incorrect")
  }
});