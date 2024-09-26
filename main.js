const inputEl = document.getElementById("add");

console.log(inputEl);

const addBtnEl = document.querySelector(".add");
console.log(addBtnEl);

const deleteBtnEl = document.getElementById("delete");
console.log(deleteBtnEl);

const listEl = document.querySelector(".list");
console.log(listEl);

addBtnEl.addEventListener("click", createTask);

function createTask() {
  const taskText = inputEl.value;

  const taskHTML = `<li data-id="${new Date().getTime()}">
            <div class="container-task" >
              <p>${taskText}</p>
              <button class="btn delete-btn">&#10060;</button>
            </div>
          </li>`;

  listEl.insertAdjacentHTML("afterbegin", taskHTML);

  const button = document.querySelector(".delete-btn");

  button.addEventListener("click", deleteTask);
}

function deleteTask(e) {
  console.log(this);
  const elemLi = document.querySelectorAll("li");
  const idTask = e.target.parentNode.parentNode.dataset.id;
  console.log(idTask);
  elemLi.forEach((task) => {
    if (idTask === task.dataset.id) {
      task.remove();
    }
  });
}
