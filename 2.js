const inputText = document.querySelector("#text")
const increase = document.querySelector("#inc")
const decrease = document.querySelector("#dec")

let currentFont = 10;

function increaseHandler(){
    currentFont += 2;
    inputText.style.fontSize = `${currentFont}px`;
}

function decreaseHandler(){
    currentFont -= 2;
    inputText.style.fontSize = `${currentFont}px`;
}

increase.addEventListener("click", increaseHandler)
decrease.addEventListener("click", decreaseHandler)