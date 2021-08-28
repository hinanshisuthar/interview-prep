const callApiBtn = document.querySelector("#call")
const outputDiv = document.querySelector("#output")


var text = "hello my name is zuzie"
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text

function errorHandler(error){
    console.log("An error occured : " + error)
    if(error === 404){
        console.log("page not found")
    } else if(error === 401) {
        console.log("you are not logged in")
    }
}

function callClickHandler(){

    fetch(url)
    .then(response => response.json())
    .then(json => outputDiv.innerHTML = json.contents.text)
    .catch(errorHandler)
}

callApiBtn.addEventListener("click", callClickHandler)