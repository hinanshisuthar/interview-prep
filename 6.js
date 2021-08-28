const loadedBtn = document.querySelector("#loaded")
const loadingLine = document.querySelector("#loading")

function loadClickHandler(){
    loadingLine.style.display = "none";
}

loadedBtn.addEventListener("click", loadClickHandler);

