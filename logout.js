window.onload = function () {
    if (localStorage.hasAccount) {
        document.getElementById("sign-up").innerHTML = "Logout";
        document.getElementById("sign-up").onclick = function () {
            localStorage.removeItem('hasAccount');
            localStorage.removeItem('first');
            localStorage.removeItem('last');
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('city');
            localStorage.removeItem('state');
            localStorage.removeItem('phone');
            
            window.location.reload();
        }
    }
}