const form = document.querySelector("form");
let password = "";
let confirmPassword = "";

// Reference: https://javascript.plainenglish.io/how-to-get-html-form-values-with-javascript-b4869bc5e889
form.addEventListener("submit", (event) => {

    event.preventDefault()
    const formData = new FormData(form)
    for (const pair of formData.entries()) {
    
        if(pair[0] == 'password') {
            password = pair[1];
        }

        if(pair[0] == 'confirm-password') {
            confirmPassword = pair[1];
        }
  }
    

  if(password.localeCompare(confirmPassword) == 0) {
    console.log("Passwords match");
  } 
  else {
    console.log("Passwords do NOT match");
  }
});