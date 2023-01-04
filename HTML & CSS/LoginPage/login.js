// login form coding

var loginForm = document.querySelector("#form");
var allInput = loginForm.querySelectorAll("input");
var loginBtn = document.querySelector("#login-btn");

loginForm.onsubmit = function(event) {
    
    event.preventDefault();
    formValidation();

    loginForm.reset("");
}


const formValidation = () => {
    
    if(allInput[0].value != "") {

        if(allInput[1].value != "") {

            loginBtn.innerHTML = "Please wait...";
            loginBtn.disabled = true;

            setTimeout(() => {
                window.location.assign("../index.html");
            }, 3000);
        }
        else {

            swal("Warning !", "password field is empty !", "warning");
        }

    }
    else {

        swal("warning !", "Email field is empty !", "warning")
    }
}