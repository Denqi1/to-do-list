"use strict";

const inputTask = document.querySelector(".input-task");
const buttonSend = document.querySelector(".send-button");
const taskList = document.querySelector(".list-container");
const taskItem = document.querySelectorAll(".item");

function addTaskItems(inputValue) {
  if (inputValue == "") {
    alert("Write something");
  } else {
    const li = document.createElement("li");
    const crossBtn = document.createElement("span");

    crossBtn.className = "cross-btn";
    li.className = "item";
    li.appendChild(document.createTextNode(inputValue));
    li.prepend(crossBtn);
    taskList.appendChild(li);
  }
  inputTask.value = "";
  dataStorage();
}

buttonSend.addEventListener("click", function () {
  addTaskItems(inputTask.value);
  dataStorage();
});

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    dataStorage();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    dataStorage();
  }
});

function dataStorage() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}

showTask();
