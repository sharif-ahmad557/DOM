// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     event.target.parentNode.removeChild(event.target);
//   });
// }
document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });

document.getElementById("btn-add-item").addEventListener("click", function () {
  const ol = document.getElementById("item-list");
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerText = "My Awesome New Item Added";
  ol.appendChild(li);
});
