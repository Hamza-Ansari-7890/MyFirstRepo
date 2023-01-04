let formElement = document.getElementById("personalInfoForm");
console.log(formElement);

function onFormSubmit(event) {
    event.preventDefault();
    let enteredEmail = document.getElementById("email").value;
    let enteredPhone = document.getElementById("phone").value;

    let regexPatterns = {
        emailPattern: /^[\w\-\.]+@gmail.com$/g,
        phonePattern: /^[0-9]{10}/g,
    };

    if (
        regexPatterns.emailPattern.test(enteredEmail) &&
        regexPatterns.phonePattern.test(enteredPhone)
    ) {
        FormData.append("email", enteredEmail);
        FormData.append("phoneNumber", enteredPhone);
    } else {
        alert("Enter correct pass or mail");
    }
}

const elements = ["Home", "Contact-US", "About"];

const renderMenuItems = (elements) => {
  const parentDiv = document.createElement("div");
  
};

formElement.addEventListener("submit", (event) => {
    onFormSubmit(event);
});
