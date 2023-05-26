const passwordDOM = document.getElementById("password");
let password = "";
let confirmPassword = "";

// References: https://javascript.plainenglish.io/how-to-get-html-form-values-with-javascript-b4869bc5e889
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
passwordDOM.addEventListener("input", (event) => {
  
    password = document.querySelector("input#password").value;
    console.log(password);

    confirmPassword = document.querySelector("input#confirm_password").value;
    console.log(confirmPassword);

    if(password.localeCompare(confirmPassword) == 0) {
    console.log("Passwords match");
    passwordDOM.setCustomValidity("");
    } 
    else {
    console.log("Passwords do NOT match");
    passwordDOM.setCustomValidity("Passwords do not match!");
    }   
});
