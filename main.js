
function myTopnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ----------See more- button----------------------------------------------------------------------------------------------
function seeMore() {
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
  // form submission--------------------------------------------------------------------------------------------------------
  function registerUser() {
    var Username = document.getElementById("txtusername").value;
    var Firstname = document.getElementById("txtfirstname").value;
    var Lastname = document.getElementById("txtlastname").value;
    var Email = document.getElementById("txtemail").value;
    var Password = document.getElementById("txtpassword").value;
    var Confirmpass = document.getElementById("passwordconfirm").value;

      db = window.openDatabase("SoccerEarth", "2.0", "SoccerEarthDB", 2*1024*1024);
      db.transaction(function(tx) {
       NewUser(tx, Username, Firstname, Lastname, Email, Password, Confirmpass);
       }, errorRegistration, successRegistration);
       }

       function NewUser(tx, Username, Firstname, Lastname, Email, Password, Confirmpass) {
       var _Query = ("INSERT INTO SoccerEarth(UserName, FirstName, LastName, Email, Password, CPass) values ('"+ Username +"','"+ Firstname +"','"+ Lastname +"','"+ Email +"', '"+ Password +"', '"+ Confirmpass +"')");
        alert(_Query);
        tx.executeSql(_Query);
        }
        function errorRegistration(error) {
     navigator.notification.alert(error, null, "Got an error mate", "cool");
         }
        function successRegistration() {
        navigator.notification.alert("User data has been registered", null, "Information", "ok");
          $( ":mobile-pagecontainer" ).pagecontainer( "change", "#page4" );
      }