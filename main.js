document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.querySelector("button");
    let input = document.querySelector("input");
    let div = document.querySelector(".list");
    addButton.addEventListener("click", () => {
       let task = input.value.trim(); 
       let newTask = document.createElement("p");
       newTask.innerHTML = task.trim();
       div.insertAdjacentElement("beforeend", newTask);
       let deleteButton = document.createElement("button");
       deleteButton.classList = "delete-button";
       deleteButton.innerHTML = "Delete";
       newTask.append(deleteButton);
       deleteButton.addEventListener("click", () => {
        newTask.remove();
       })
    });
});