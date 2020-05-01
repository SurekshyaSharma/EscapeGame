$(document).ready( function () {
 
   });

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less"; 
    moreText.style.display = "inline";
  }
}

function display(form){
  if (form.username.value=="root") { 
      if (form.password.value=="root") {              
          location="page2.html" 
      } else {
           alert("Invalid Password")
      }
  } else {  alert("Invalid Username")
    }
}

function mynav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}