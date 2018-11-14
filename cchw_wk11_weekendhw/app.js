document.addEventListener("DOMContentLoaded", ()=>{

    const commentForm = document.querySelector("#comment_form");
    commentForm.addEventListener("submit", commentFormHandler);
    
    const clearCommentsBtn = document.querySelector("#clear_comments_btn");
    clearCommentsBtn.addEventListener("click", clearCommentsBtnHandler);
});

const commentFormHandler = function(event){
    event.preventDefault();
    createListFromFormFields(event);
}

const deleteItemHandler = function(event){
    const listToDelete = event.target.parentElement;
    const body = document.querySelector("body");
    body.removeChild(listToDelete);
}

const createListFromFormFields = function(event){
    const name = event.target.name_field.value;
    const nameItem = document.createElement("li");
    nameItem.textContent = name;
    
    const email = event.target.email_field.value;
    const emailItem = document.createElement("li");
    emailItem.textContent = email;

    const comments = event.target.comment_field.value;
    const commentItem = document.createElement("li");
    commentItem.textContent = comments;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete_item";
    deleteBtn.textContent = "Delete Comment";
    deleteBtn.addEventListener("click", deleteItemHandler);

    const unorderedList = document.createElement("ul");
    unorderedList.className = "comment_entry";
    unorderedList.appendChild(nameItem);
    unorderedList.appendChild(emailItem);
    unorderedList.appendChild(commentItem);
    unorderedList.appendChild(deleteBtn);
    
    const body = document.querySelector("body");
    body.appendChild(unorderedList);
}

const clearCommentsBtnHandler = function(){
    const lists = document.querySelectorAll(".comment_entry");
    const body = document.querySelector("body");
    lists.forEach((list) => {
        body.removeChild(list);
    })
}