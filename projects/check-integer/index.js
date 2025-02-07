document.getElementById('integerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('resultMessage').textContent = '';

    // Get input value
    const inputValue = document.getElementById('inputNumber').value.trim();

    // Check if the input is an integer
    if (isInteger(inputValue)) {
        document.getElementById('resultMessage').textContent = `✅ "${inputValue}" is an integer!`;
        document.getElementById('resultMessage').style.color = '#4CAF50';
    } else {
        document.getElementById('errorMessage').textContent = '❌ Please enter a valid integer.';
        document.getElementById('errorMessage').style.display = 'block';
    }
});

// Helper function to check if a value is an integer
function isInteger(value) {
    return /^-?\d+$/.test(value); // Matches positive or negative integers only
}