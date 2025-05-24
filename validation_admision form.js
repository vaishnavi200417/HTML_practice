const form = document.getElementById('admission-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const courseSelect = document.getElementById('course');
const addressTextarea = document.getElementById('address');
const submitBtn = document.getElementById('submit-btn');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const courseError = document.getElementById('course-error');
const addressError = document.getElementById('address-error');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const course = courseSelect.value.trim();
    const address = addressTextarea.value.trim();

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

    if (phone === '') {
        phoneError.textContent = 'Please enter your phone number.';
        isValid = false;
    } else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.textContent = 'Please enter a valid phone number.';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    if (course === '') {
        courseError.textContent = 'Please select a course.';
        isValid = false;
    } else {
        courseError.textContent = '';
    }

    if (address === '') {
        addressError.textContent = 'Please enter your address.';
        isValid = false;
    } else {
        addressError.textContent = '';
    }

    if (isValid) {
        alert('Admission form submitted successfully!');
        form.submit();
    }
});