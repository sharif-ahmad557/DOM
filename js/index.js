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

const colorChabge = document.getElementById("color");
console.log(colorChabge.innerText);
colorChabge.innerText = "amar bangladesh"; // text change
colorChabge.style.color = "green";
colorChabge.style.backgroundColor = "gold";
colorChabge.style.border = "2px";
colorChabge.style.padding = "20px";

// new element added by js in html
// const createElement = document.createElement("li");
// createElement.innerText = "Arshad";
// console.log(createElement.innerText);
// const studentsList = document.getElementById("students-list");
// studentsList.appendChild(createElement);

const createElement = document.createElement("h1");
console.log(createElement);
createElement.innerText = "This four students is my madrasas best students";
const addElement = document.getElementById("students-list");

addElement.appendChild(createElement);

// singale element created
const mainSection = document.getElementById("body");
const createSection = document.createElement("section");
mainSection.appendChild(createSection);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Good student";
ul.appendChild(li1);
createSection.appendChild(ul);

const li2 = document.createElement("li");
li2.innerText = "Very good studenT";
ul.appendChild(li2);
createSection.appendChild(ul);

const li3 = document.createElement("li");
li3.innerText = "bed studenT";
ul.appendChild(li3);
createSection.appendChild(ul);

// Element created with HTML tag

const bookSection = document.createElement("section");
bookSection.innerHTML = `
<h1>My best choesed books</h1>
<ul>
<li>Holy Quran</li>
<li>Holy Hadith</li>
<li>Sirate Rasul</li>
<li>Histry of muslim ummah</li>
<li>About of fitnah</li>
</ul>
`;
createSection.appendChild(bookSection);
console.log(bookSection.innerText);