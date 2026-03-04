// document
//   .getElementById("btn-post-comment")
//   .addEventListener("click", function () {
//     const commentTextBox = document.getElementById("comment-text-box");
//     const newComment = commentTextBox.value;
//     const commentContainer = document.getElementById("comment-container");

//     const createCommentEl = document.createElement("p");

//     createCommentEl.innerText = newComment;
//     createCommentEl.classList.add("comment");
//     commentContainer.appendChild(createCommentEl);
//   });

document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    const commentTextBox = document.getElementById("comment-text-box");
    const newComment = commentTextBox.value;
    const commentContainer = document.getElementById("comment-container");
    const nommentEl = document.createElement("p");
    nommentEl.innerText = newComment;
    nommentEl.classList.add("comment");

    commentContainer.appendChild(nommentEl);
  });
