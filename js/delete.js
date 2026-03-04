document
  .getElementById("input-delete")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    console.log("input tag", text);
    const deleteBtn = document.getElementById("delete-btn");
    const secreteInfo = document.getElementById("secrete-info");
    if (text === "delete") {
      console.log("typing delete");
      deleteBtn.removeAttribute("disabled");
      secreteInfo.style.display = "none";
    } else {
      console.log("typing rong");
      deleteBtn.setAttribute("disabled", true);
    }
  });
