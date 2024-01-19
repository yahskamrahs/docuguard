document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials (use the same credentials object from the main JavaScript file)
    if (credentials[username] && credentials[username].password === password) {
        // Redirect to the main chatbot page with the logged-in user
        window.location.href = 'chatbot.html?user=' + username;
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
