document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const course = document.getElementById('course').value.trim();

    let isValid = true;

    // Validate First Name
    if (firstName === '') {
        showError('firstName', 'First name is required.');
        isValid = false;
    }

    // Validate Last Name
    if (lastName === '') {
        showError('lastName', 'Last name is required.');
        isValid = false;
    }

    // Validate Date of Birth
    if (dob === '') {
        showError('dob', 'Date of birth is required.');
        isValid = false;
    }

    // Validate Gender
    if (gender === '') {
        showError('gender', 'Please select your gender.');
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        showError('email', 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Phone
    if (phone === '') {
        showError('phone', 'Phone number is required.');
        isValid = false;
    } else if (!isValidPhone(phone)) {
        showError('phone', 'Please enter a valid phone number.');
        isValid = false;
    }

    // Validate Address
    if (address === '') {
        showError('address', 'Address is required.');
        isValid = false;
    }

    // Validate Course
    if (course === '') {
        showError('course', 'Please select a course.');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert('Registration successful!');
        // You can submit the form programmatically here if needed:
        // this.submit();
    }
});

// Helper function to show error messages
function showError(elementId, message) {
    const inputElement = document.getElementById(elementId);
    inputElement.style.borderColor = 'red';
    const errorElement = document.createElement('small');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.display = 'block';
    errorElement.style.marginTop = '5px';
    inputElement.parentNode.appendChild(errorElement);
}

// Helper function to clear all error messages
function clearErrors() {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
        const errorElement = input.parentNode.querySelector('small');
        if (errorElement) {
            errorElement.remove();
        }
    });
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate phone number format
function isValidPhone(phone) {
    const phoneRegex = /^\+?[0-9]{10,15}$/; // Allows optional '+' and 10-15 digits
    return phoneRegex.test(phone);
}