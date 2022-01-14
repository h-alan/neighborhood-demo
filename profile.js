function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function chatClick() {
  document.getElementById('chatbutton').value = '';
}
function reviewClick() {
  document.getElementById('reviewbutton').value = '';
}
function requestClick() {
  document.getElementById('requestbutton').value = '';
}






/*
$(".user-post").click(function() {
    $('.user-review').removeClass('active');
    $('.user-setting').removeClass('active');
    $('.user-post').addClass('active');

})
$(".user-review").click(function() {
    $('.user-post').removeClass('active');
    $('.user-setting').removeClass('active');
    $('.user-review').addClass('active');

$(".user-setting").click(function() {
    $('.user-review').removeClass('active');
    $('.user-post').removeClass('active');
    $('.user-setting').addClass('active');
*/


/*
const tabBtn = document.querySelectorAll('user');
const tab = document.querySelectorAll('.tab');

function tabs(panelIndex) {
  tab.forEach(function(node) {
    node.style.display = 'none';
  });
  tabs[panelIndex].style.display = 'block';
}
tabs(0);
*/



var i = 0;
var width = 0;
var credLevel = 1;

//document.getElementById("credLevels").innerHTML = "Credibility: " + credLevel;

window.onload = function () {
  if (localStorage.hasAccount) {
    var name = localStorage.getItem('first') + " " + localStorage.getItem('last');
    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = "<scan class='symbol'> ✉ </scan>" + localStorage.getItem('email');
    document.getElementById("city").innerHTML = localStorage.getItem('city');
    document.getElementById("state").innerHTML = localStorage.getItem('state');
    phone = document.getElementById("phone").innerHTML = "<scan class='symbol'> ☎ </scan>" + localStorage.getItem('phone');
  }

  else {
    document.getElementById("profile-header").innerHTML = "<h1 style='color:white;margin-left:27%;'><i>Please Sign Up Before Viewing Your Account!</i></h1>";
    document.getElementById("profile-main").innerHTML = "";
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

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function increaseBar() {
  var elem = document.getElementById("myBar");

  if (width < 100) {
    width += 20;
  } else if (width => 100) {
    credLevel += 1;
    document.getElementById("credLevels").innerHTML.width = credLevel;
    width = 0;
  }
  elem.style.width = width + "%";

}
function decreaseBar() {
  var elem = document.getElementById("myBar");

  if (width > 0) {
    width -= 20;

  } else if (width <= 0) {
    credLevel -= 1;
    document.getElementById("credLevels").innerHTML.width = credLevel;
    width = 100;
  }
  elem.style.width = width + "%";
}



