document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const registerLink = document.getElementById("register-link");

    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        formTitle.textContent = "Register";
        authForm.innerHTML = `
            <div class="input-group">
                <label>Username</label>
                <input type="text" required>
            </div>
            <div class="input-group">
                <label>Email</label>
                <input type="email" required>
            </div>
            <div class="input-group">
                <label>Password</label>
                <input type="password" required>
            </div>
            <div class="input-group">
                <label>Confirm Password</label>
                <input type="password" required>
            </div>
            <button type="submit" class="btn">Register</button>
            <p class="toggle-form">Already have an account? <a href="#" id="login-link">Login</a></p>
        `;

        document.getElementById("login-link").addEventListener("click", function (event) {
            event.preventDefault();
            location.reload();
        });
    });
});
