const form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        window.location.href = 'confirmation.html'
    }
}