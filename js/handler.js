document.getElementById("update-title").addEventListener("click", function () {
  const titleEl = document.getElementById("title");
  titleEl.innerText = "title changed succesful";
  //   console.log(titleEl.innerText);
});

// <p id="name-display">No name</p>
// <input id="name" placeholder="your name" type="text" />
// <br />
// <br />
// <button id="update-name">Update Name</button>
document.getElementById("update-name").addEventListener("click", function () {
  const inoutName = document.getElementById("name");
  const updatedName = inoutName.value;
  const nameP = document.getElementById("name-display");
  nameP.innerText = updatedName;

});
