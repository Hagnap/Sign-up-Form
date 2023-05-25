const form = document.querySelector("form");
let password = "";
let confirmPassword = "";


form.addEventListener("submit", (event) => {

    event.preventDefault()
    const formData = new FormData(form)
    for (const pair of formData.entries()) {
        
        console.log(pair);

        if(pair[0] == 'password') {
            password = pair[1];
        }

        if(pair[0] == 'confirm-password') {
            confirmPassword = pair[1];
        }
  }
    

  console.log(password);
  console.log(confirmPassword);



});

/*
    btn.addEventListener('click', function (e) {
    console.log(e);
    e.target.style.background = 'blue';
  });
*/