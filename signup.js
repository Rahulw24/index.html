
document.getElementById('bon').addEventListener('click',function(){
var password = document.getElementById("password")
confirm_password = document.getElementById("confirm_password");
if(password.length!==0||confirmpassword.length!==0)
{
function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
});
