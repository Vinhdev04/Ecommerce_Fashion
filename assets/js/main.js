const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");

const createAcc = document.querySelector(".createAcc");
const signInAcc = document.querySelector(".signInAcc");

// Event listener for "Create Account" button
createAcc.addEventListener("click", (e) => {
  e.preventDefault();
  signUp.style.display = "block";
  signIn.style.display = "none";
});

// Event listener for "Sign In" button
signInAcc.addEventListener("click", (e) => {
  e.preventDefault();
  signUp.style.display = "none";
  signIn.style.display = "block";
});

const acc = document.querySelector(".btn-acc");
console.log(acc);
