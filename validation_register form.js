const form = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    let isValid = true;

    if (name === '') {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (email === '') {
        emailError.textContent = 'Please enter your email.';
        isValid = false;
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password === '') {
        passwordError.textContent = 'Please enter your password.';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Please confirm your password.';
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (isValid) {
        alert('Registration successful!');
        form.submit();
    }
});
