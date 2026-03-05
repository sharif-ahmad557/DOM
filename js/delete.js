// ইনপুটে "delete" টাইপ করা মাত্রই ডিলেট হয়ে যাবে।
// document
//   .getElementById("input-delete")
//   .addEventListener("keyup", function (event) {
//     const text = event.target.value;
//     console.log("input tag", text);
//     const deleteBtn = document.getElementById("delete-btn");
//     const secreteInfo = document.getElementById("secrete-info");
//     if (text === "delete") {
//       console.log("typing delete");
//       deleteBtn.removeAttribute("disabled");
//       secreteInfo.style.display = "none";
//     } else {
//       console.log("typing rong");
//       deleteBtn.setAttribute("disabled", true);
//     }
//   });

//ইনপুটে "delete" টাইপ kore বাটনে  ক্লিক করার পরে ডিলেট হবে
document
  .getElementById("delete-btn")
  .addEventListener("click", function (event) {
    console.log("delete btn clicked");
    const inputDelete = document.getElementById("input-delete");
    const secreteInfo = document.getElementById("secrete-info");
    // console.log(inputDelete);
    const text = inputDelete.value;
    console.log(text);
    if (text === "delete") {
      console.log("typing delete");
      secreteInfo.style.display = "none";
    } else {
      console.log("typing rong");
    }
  });
