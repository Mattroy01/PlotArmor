var fname=document.getElementById("txtFname");
var lname=document.getElementById("txtLname");
var userName=document.getElementById("pUserName");
var secUserInpt=document.getElementById("userInput");
var secUserOpt=document.getElementById("userOutput");
function getUserData() {
    var fstName=fname.value;
    var lstName=lname.value;
    if(fstName!==""&&lstName!=="")
    {
    userName.innerHTML="Welcome "+fstName+" "+lstName;
    secUserInpt.style.display="none";
    secUserOpt.style.display="block";
    }
}
function goHome() {
    fname.value="";
    lname.value="";
    secUserInpt.style.display="block";
    secUserOpt.style.display="none";
}