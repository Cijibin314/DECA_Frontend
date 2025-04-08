document.addEventListener("DOMContentLoaded", start);

function start() {
    const errorMessage = document.getElementById("error-message");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = this.querySelector("input[type='text']").value;
        const password = this.querySelector("input[type='password']").value;

        fetch('https://deca-backend.onrender.com/api/validateUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": username, "password": password })
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.valid) {
                errorMessage.style.display = 'none'; // Hide error message if valid
                window.location.href = "https://cijibin314.github.io/DECA_Students/"
            } else {
                errorMessage.style.display = 'block'; // Show error message if invalid
            }
        });
    });

    usernameField.addEventListener('input', function () {
        errorMessage.style.display = 'none';
    });

    passwordField.addEventListener('input', function () {
        errorMessage.style.display = 'none';
    });
}