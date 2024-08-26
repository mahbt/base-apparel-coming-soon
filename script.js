const submitBtn = document.querySelector(".btn");
const errorIcon = document.querySelector("form .error-icon");
const toastMsg = document.querySelector("form .toast-msg");
const emailInput = document.getElementById("email");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    errorIcon.classList.remove("hidden");
    errorIcon.classList.add("active");
    toastMsg.classList.remove("hidden");
    toastMsg.classList.add("active");
  } else {
    errorIcon.classList.add("hidden");
    errorIcon.classList.remove("active");
    toastMsg.classList.add("hidden");
    toastMsg.classList.remove("active");
  }
});
