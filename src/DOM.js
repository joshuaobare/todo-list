import {inputs,todoList} from "./controller.js"

let title 
let description 
let dueDate 
let priority
let project
let projectTitle
const todos = []
const projectContainer = document.querySelector("#projectContainer")
const subBtn = document.querySelector("#todo-form-submit")
const projectBtn = document.querySelector("#project-submit")
const projSection = document.querySelector("#projectSection")
const createproject = document.querySelector("#createproject")
const projnameform = document.querySelector("#proj-name-form")
const taskadder = document.querySelector("#addtask")
const todoform = document.querySelector("#main-form")

function sub(e) {
    e.preventDefault()
    title = document.querySelector("#title").value
    description = document.querySelector("#description").value
    dueDate = document.querySelector("#dueDate").value
    priority= document.querySelector('input[name="priority"]:checked').value
    inputs()
}

function projName(e){
    e.preventDefault()
    project = document.querySelector("#project-name").value
    return project
}

function displayTodos() {
    projectContainer.innerHTML = ""

    for (let x=0 ; x< todoList.length ;x++) {
        
        todos[x] = document.createElement("div")
        const todo = document.createElement("div")

        for(let y in todoList[x]) {
            todo.innerHTML += todoList[x][y] + "&emsp;"
        

        
        }
        

        todos[x].appendChild(todo)
        projectContainer.appendChild(todos[x])
    } 
    
}

subBtn.addEventListener("click", function(e) {
    
    sub(e)
    document.querySelector(".todo-form").reset()
    console.log(todoList)
    todoform.classList.add("form")
    displayTodos()

})

projectBtn.addEventListener("click", function(e) {
    projName(e)
    projectTitle = projName(e)
    document.querySelector(".project-form").reset()
    
    const newProj = document.createElement("div")
    newProj.setAttribute("id","projecttitle")
    newProj.setAttribute("class",projectTitle)
    newProj.innerHTML += projectTitle
    projSection.appendChild(newProj)
    projnameform.classList.add("form")

})

createproject.addEventListener("click", function(e) {
    projnameform.classList.remove("form")
})

taskadder.addEventListener("click", function(e) {
    todoform.classList.remove("form")
})

export {title, description, dueDate, priority,sub}