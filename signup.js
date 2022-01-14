
window.onload = function () {
    if (localStorage.hasAccount) {
        document.getElementById("contactForm").innerHTML = "You've Signed Up!"
    }
    // Add an event listener for form submissions
    document.getElementById("contactForm").addEventListener("submit", function () {
        // Get the value of the name field.
        var first = document.getElementById("first").value;
        var last = document.getElementById("last").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var phone = document.getElementById("phone").value;

        // Save the name in localStorage.
        localStorage.hasAccount = true;
        localStorage.setItem('first', first);
        localStorage.setItem('last', last);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
        localStorage.setItem('phone', phone);
    });
    
}

function displayProfile() {
    // Retrieve the users name.
    var name = localStorage.getItem('first') + " " + localStorage.getItem('last');

    if (localStorage.first !== "undefined" || localStorage.first !== "null") {
        document.getElementById("display").innerHTML = "Hello " + name + "!<br />" + "Email: " + localStorage.email + "<br />" + "Phone Number: " + localStorage.phone + "<br />" +
            "Password: " + localStorage.password + "<br />" + "Location: " + localStorage.city + ", " + localStorage.state;
    } else {
        document.getElementById("display").innerHTML = "Hello New User!";
    }
}

function deleteSave() {
    localStorage.clear();
}