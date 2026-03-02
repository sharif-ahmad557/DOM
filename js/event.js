// option 2 event hendler
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3

const makeBtnPurple = document.getElementById("btn-make-purple");
// console.log(makeBtnPurple);
makeBtnPurple.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

// option 3 diffarent verson

const makeBtnPink = document.getElementById("btn-make-pink");
// console.log(makeBtnPink);
makeBtnPink.onclick = pink;
function pink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 verson 1

document
  .getElementById("btn-make-green")
  .addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = " green";
  });
// console.log(btnMakeGreen);

// option 4 v2

document
  .getElementById("btn-make-orange")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
  });
