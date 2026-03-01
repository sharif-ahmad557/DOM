const result = document.getElementsByTagName("li");
for (const licoll of result) {
  console.log(licoll.innerText);
}
console.log(result);

const h1Eliment = document.getElementsByTagName("h1");
for (const h1 of h1Eliment) {
  console.log(h1.innerText);
}
console.log(h1Eliment);
const heading = document.getElementsByClassName("heading");
console.log(heading.innerText);
// text changed
const headerH1 = document.getElementById("header");
header.innerText = "amar bangladesh";

const spanEli = document.querySelectorAll(".section span");
console.log(spanEli);
for (const span of spanEli) {
  console.log(span.innerText);
}
