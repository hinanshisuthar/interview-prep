const inputText = document.querySelector("#input");
const h1Btn = document.querySelector("#h1");
const h2Btn = document.querySelector("#h2");
const h3Btn = document.querySelector("#h3");
const h1Output = document.querySelector("#h1-output");
const h2Output = document.querySelector("#h2-output");
const h3Output = document.querySelector("#h3-output");

function h1ClickHandler() {
  console.log("clicked");
  h1Output.innerHTML = inputText.value;
}

function h2ClickHandler() {
  // console.log("clicked");
  h2Output.innerHTML = inputText.value;
}

function h3ClickHandler() {
  // console.log("clicked");
  h3Output.innerHTML = inputText.value;
}

h1Btn.addEventListener("click", h1ClickHandler);
h2Btn.addEventListener("click", h2ClickHandler);
h3Btn.addEventListener("click", h3ClickHandler);
