const form = document.querySelector(".form");
const submitBtn = document.getElementById("btn-submit");

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", validateForm);

function handleFormSubmit(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    window.location.href = "confirmation.html";
  }
}

function validateForm() {
  const formFields = form.querySelectorAll("input, select");
  const isFormValid = Array.from(formFields).every(
    (field) => field.value.trim() !== ""
  );
  if (isFormValid) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add("disabled");
  }
}
