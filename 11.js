const inputPassword = document.querySelector("input")
const outputDiv = document.querySelector("#output")
const buttonSubmit = document.querySelector("#button")

function clickHandler(){
    if (inputPassword.value.length < 10) {
        outputDiv.innerText = "Error: password length should be > 10";
        inputPassword.style.backgroundColor = "red";
      } else {
        outputDiv.innerText = "success";
        inputPassword.style.backgroundColor = "green";
      }
}

buttonSubmit.addEventListener("click", clickHandler)