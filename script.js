const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
}

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if(!taskname) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }

    const task = <div class="task">
        <input type="checkbox" class="task-check">
        <span class ="taskname">${taskname}</span>
        <button class="edit">
        </button>
        <button class="delete">
        <i class="fa-solid fa-trash"></i>    
        </button>

        </div>

        taskscontainer.insertAdjacentHTML
("beforeend", task);
const deleteButtons = document.
querySelectorAll(".delete");
deleteButtons.forEach(button => {
    button.onclick = () => {
        button.parentNode.remove();
        taskcount = -1;
        displayCount(taskcount);
 };
});
const editButtons = document.
querySelectorAll(".edit");
editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
        let targetElement = e.target;
        if (!(e.target.className == "edit")){
            targetElement = e.target.
            parentElement;
        
    }
    newTaskInput.value = targetElement.
    previousElementSibling?.innerText;
    targetElement.parentNode.remove();
    taskcount -= 1;
    displayCount(taskcount);

};

});
const taskCheck = document.querySelectorAll
(".task-check");
taskCheck.forEach((checkBox)  => {
    checkBox.onChange = () => {
        checkBox.nextElementSibling.classList.
        toggle("completed");
        if (checkBox.checked){
            taskcount -= 1;

        }
        else {
            taskcount += 1;
        }
        displayCount(taskCount);

        };

    });
    taskCount += 1;
    displayCount(taskCount);
    newTaskInput.value = ""; 

};

addBtn.addEventListener("click", addTask);

window.onlide = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";

};
