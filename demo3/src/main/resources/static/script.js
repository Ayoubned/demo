$(document).ready(function() {
  // Use jQuery .get() to fetch the content of "header.html"
  $.get("footer.html", function(data) {
      // Insert the content into the specified container
      $("#footer").html(data);
  });
});
$(document).ready(function() {
    $.get("header.html", function(data) {
        $("#header").html(data);
        // Re-run the script inside header.html
        let isLoggedIn = sessionStorage.getItem('isLoggedIn');
        let username = sessionStorage.getItem("username"); // Retrieve the username
        var userLinks = document.getElementById('userLinks');
        var userIcon = document.getElementById('userIcon');
        var usernameDisplay = document.getElementById('usernameDisplay'); // Get the new span
        if (isLoggedIn) {
            userLinks.classList.add('d-none');
            userIcon.classList.remove('d-none');
            usernameDisplay.textContent = username;
        } else {
            userLinks.classList.remove('d-none');
            userIcon.classList.add('d-none');
        }
    });
});


// Assuming this code is executed after the user logs in successfully
function logout() {
    // Clear login state from session storage
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
    // Redirect to another page if needed
    window.location.href = '/login.html'; // Redirect to homepage after logout
}

