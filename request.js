class Request {
    constructor(reqName, myName, duration, location, category, description, tags) {
        this.reqName = reqName;
        this.myName = myName;
        this.duration = duration;
        this.myLocation = location;
        this.category = category;
        this.description = description;
        this.tags = tags;
    }
}

window.onload = function () {
    if(localStorage.getItem("requestList") == null){
        localStorage.setItem("requestList",[])
    }

    if (localStorage.hasAccount) {
        var name = localStorage.getItem('first') + " " + localStorage.getItem('last');
        var location = localStorage.getItem('city') + ", " + localStorage.getItem('state');
        document.getElementById("requestName").innerHTML = name;
        document.getElementById("locationName").innerHTML = location;
        document.getElementById("emailName").innerHTML = localStorage.getItem('email');
        document.getElementById("phoneName").innerHTML = localStorage.getItem('phone');

    }
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

function addRequest() {
    var request = document.getElementById("request").value;
    var name = localStorage.getItem("first") + " " + localStorage.getItem("last");
    var duration = document.getElementById("duration").value;
    var location = localStorage.getItem("city") + ", " + localStorage.getItem("state");
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    var tags = document.getElementById("tags").value;
    let req = new Request(request, name, duration, category, description, tags);

    if (isEmpty(localStorage.getItem("requestList"))) {
        var requests = [];
        requests.push(req);
        localStorage.setItem("requestList", JSON.stringify(requests));
    }
    else {
        var requestList = JSON.parse(localStorage.getItem("requestList")) || [];
        requestList.push(req);
        localStorage.setItem("requestList", JSON.stringify(requestList));
    }
    console.log(JSON.parse(localStorage.getItem('requestList')));

    sendForm();
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function sendForm(){
    //Uncomment to actually send vvvvvvv
    sendMail();

    alert("You may need to check your spam folder in your email. I swear, this works but the service I'm using is sketchy");
}

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "haoqi21@solonschools.net",
        Password : "92B7D93E8CAF7B2DEFF9A8403CB308CAF956",
        To : localStorage.getItem("email"),
        From : "haoqi21@solonschools.net",
        Subject : localStorage.getItem("first") + " " + localStorage.getItem("last") + " - Neighborhood Request",
        Body : "Hello " + localStorage.getItem("last") + ", Thank you for your interest in requesting Neighborhood Services. You have requested " + document.getElementById("request").value + " and will be notified via this email " + localStorage.getItem("email") + " when someone nearby is able to assist you. However, if you wish to cancel due to a lack of time, feel free to do so whenever at [FUNCTION NOT IMPLEMENTED]. Best, the Neighborhood Team"
    }).then(
        console.log("SENT!")
    );
}