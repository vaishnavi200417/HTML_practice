const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;

    if (username === '') {
        usernameError.textContent = 'Please enter your username.';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    if (password === '') {
        passwordError.textContent = 'Please enter your password.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        // Here you would typically send a request to your server to verify the credentials
        // For demonstration purposes, we'll just fake a successful login
        alert('Login successful!');
    }
});
