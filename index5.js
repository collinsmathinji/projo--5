const add = document.querySelector("#add");
const Tcontainer = document.querySelector("#task-container");
const input = document.querySelector("#input");

add.addEventListener("click", function() {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${input.value}`; // Use input.value instead of inputTask.value
  task.appendChild(li);

  let checkbutton = document.createElement("button");
  checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkbutton.classList.add("check");
  task.appendChild(checkbutton);

  let deletebutton = document.createElement("button");
  deletebutton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deletebutton.classList.add("delete");
  task.appendChild(deletebutton);

  if (input.value == "") { // Use input.value instead of inputTask.value
    alert("Please enter task");
  } else {
    Tcontainer.appendChild(task);
  }
  
  input.value = "";
  deletebutton();
});
deletebutton.addEventListener("click",function(e){
    let target=e.target
    target.parentElement.parentElement.remove();
})
checkbutton.addEventListener("click",function(){
    checkbutton.parentElement.style.textDecoration="line-through"

})