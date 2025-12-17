const form = document.querySelector(".hero__form");
const emailInput = document.querySelector("#email");
const errorIcon = document.querySelector(".hero__icon-error");
const errorMessage = document.querySelector(".form__error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError() {
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
}

function clearError() {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
}

function handleSubmit(e) {
    e.preventDefault();
    const inputValue = emailInput.value.trim();

    if (inputValue === "" || !emailRegex.test(inputValue)) {
        showError();
        return;
    }

    clearError();
    form.reset();
}

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", clearError);