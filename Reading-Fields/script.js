
function checkAddress(emailId,passId){
  let email = document.getElementById(emailId);
  let password = document.getElementById(passId);
   if (email.value === "" || password.value === ""){
    alert("Enter the credentials")
   }
}