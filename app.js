// Load saved inputs from localStorage when the page is loaded
document.addEventListener('DOMContentLoaded', loadSavedInputs);

// Handle form submission
document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    // Get the input values
    const nameInput = document.getElementById('name-input').value;
    const emailInput = document.getElementById('email-input').value;

    // Create an object with the inputs
    const newEntry = { name: nameInput, email: emailInput };

    // Get the current array of saved inputs from localStorage
    let savedInputs = JSON.parse(localStorage.getItem('inputs')) || [];

    // Add the new entry to the array
    savedInputs.push(newEntry);

    // Save the updated array back to localStorage
    localStorage.setItem('inputs', JSON.stringify(savedInputs));

    // Clear the form fields
    document.getElementById('name-input').value = '';
    document.getElementById('email-input').value = '';

    // Update the displayed list of saved inputs
    loadSavedInputs();
});

// Load saved inputs from localStorage and display them
function loadSavedInputs() {
    const savedInputs = JSON.parse(localStorage.getItem('inputs')) || [];

    // Get the container where inputs will be displayed
    const inputList = document.getElementById('input-list');

    // Clear the existing list
    inputList.innerHTML = '';

    // Loop through the saved inputs and create list items for each entry
    savedInputs.forEach(function(input) {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${input.name}, Email: ${input.email}`;
        inputList.appendChild(listItem);
    });
}
