$(document).ready( function () {
   });
// ----------See more- button----------------------------------------------------------------------------------------------
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
// form-------------------------------------------------------------------------------------------------------
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
// navigation----------------------------------------------------------------------------------------------------
function mynav() {
  var x = document.getElementById("myTopnav").style.width = "100%";
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// --------------------------------sign up--------------------------------------------------------------------------------

 // Get the modal
 var modal = document.getElementById('id01');
      
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

// login button--------------------------------------------------------------------------------------------------
var gamePortal = document.getElementById('signIn');
      
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == gamePortal) {
    gamePortal.style.display = "none";
  }
}
function gameportal(){

}