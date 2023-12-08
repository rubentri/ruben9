document.title = "Belajar javascript";
const body = document.body;

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector("button");

const defaultText = "Klik 1";
btn1.textContent = defaultText;

// Menstyle menggunakna javscript
btn1.style.border = "none";
btn1.style.padding = "28px";
btn1.style.fontSize = "30px";
btn1.style.background = "red";

function clickButton() {
  btn1.style.background = "purple";
  const newText = document.createElement("p");
  newText.textContent = "Hallo bung!!";
  body.append(newText);
}

function ubahText() {
  btn1.textContent = "Ruben TAS";
}
function oriText() {
  btn1.textContent = defaultText;
}
