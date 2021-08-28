const inputText = document.querySelector("#text")
const redText = document.querySelector("#red")
const greenText = document.querySelector("#green")
const blueText = document.querySelector("#blue")

function redClickHandler(){
    inputText.style.color = "red"
}

function blueClickHandler(){
    inputText.style.color = "blue"
}

function greenClickHandler(){
    inputText.style.color = "green"
}

redText.addEventListener("click", redClickHandler)
blueText.addEventListener("click", blueClickHandler)
greenText.addEventListener("click", greenClickHandler)