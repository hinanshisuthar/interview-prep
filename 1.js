var inputOne = document.querySelector("#input1")
var inputTwo = document.querySelector("#input2")
var add = document.querySelector("#sum")
var subtract = document.querySelector("#minus")
var divide = document.querySelector("#division")
var multiply = document.querySelector("#multiplication")
var outputDiv = document.querySelector("#output")

function addEventHander(){
    outputDiv.innerHTML = Number(inputOne.value) + Number(inputTwo.value);
}

function subtractEventHander(){
    outputDiv.innerHTML = Number(inputOne.value) - Number(inputTwo.value);
}

function divideEventHander(){
    outputDiv.innerHTML = Number(inputOne.value) / Number(inputTwo.value);
}

function multiplyEventHandler(){
    outputDiv.innerHTML = Number(inputOne.value) * Number(inputTwo.value);
}

add.addEventListener("click", addEventHander)
subtract.addEventListener("click", subtractEventHander)
divide.addEventListener("click", divideEventHander)
multiply.addEventListener("click", multiplyEventHandler)