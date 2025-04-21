document.addEventListener("DOMContentLoaded", start);

function start() {
    const errorMessage = document.getElementById("error-message");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = this.querySelector("input[type='text']").value;
        const password = this.querySelector("input[type='password']").value;
        document.getElementById("login-loader").style.display = "block";
        fetch('https://deca-backend.onrender.com/api/validateUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": username, "password": password })
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.valid) {
                document.getElementById("login-loader").style.display = "none";
                errorMessage.style.display = 'none'; // Hide error message if valid
                window.location.href = "../../studentsPage/index.html"
            } else {
                document.getElementById("login-loader").style.display = "none";
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