let requests = JSON.parse(localStorage.getItem('requestList'));
let reqlist;

window.onload = function () {
    //logout part
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

    reqlist = document.getElementById("reqlist");

    for (let i = 0; i < requests.length; i++) {
        createNode(requests[i]);
    }


}

function createNode(item) {
    var newnode = document.createElement("div");
    newnode.id = "listitem";

    //
    newnode.innerHTML =
                    "<h1>" + item.reqName + "</h1>" +
                    "<h3> Requested by " + item.myName + "</h3>" +
                    "<p1>" + item.category + "</p1><br>" +
                    "<p1>" + item.duration + "</p1><br>" +
                    "<p1> At " + localStorage.getItem("city") + ", " + localStorage.getItem('state')+ "<p1><br>" +
                    "<p1>" + item.description + "</p1><button class = \"button\" style = \"float: right;\">Request</button>";

    

    reqlist.appendChild(newnode);
}

function sortnew() {
    reqlist.innerHTML = "";

    for (let i = requests.length; i > 0; i--) {
        createNode(requests[i - 1]);
    }
}

function sortold() {
    reqlist.innerHTML = "";

    for (let i = 0; i < requests.length; i++) {
        createNode(requests[i]);
    }
}

function sortshort() { //checking if else bc its so early and im tired
    reqlist.innerHTML = "";
    for (let i = 0; i < requests.length; i++) {
        console.log(requests[i].duration)
        if (requests[i].duration == "0 ~ 30 Min") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "30 Min ~ 1 Hour") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "1 ~ 2 Hours") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "2 ~ 4 Hours") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "4 Hours +") {
            createNode(requests[i]);
        }
    }
}

function sortlong() {
    reqlist.innerHTML = "";
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "4 Hours +") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "2 ~ 4 Hours") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "1 ~ 2 Hours") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "30 Min ~ 1 Hour") {
            createNode(requests[i]);
        }
    }
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].duration == "0 ~ 30 Min") {
            createNode(requests[i]);
        }
    }
}

function search() {
    const f = document.getElementById('form');
    const q = document.getElementById('searchbartext');
    console.log("test");    
    reqlist.innerHTML = "";
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].category == q) {
            console.log(requests[i].category);
            createNode(requests[i]);
        }
    }
}