import {inputs,todoList} from "./controller.js"

let title 
let description 
let dueDate 
let priority
let project
let projectTitle
const todos = []
const rightSection = document.querySelector("#rightSection")
const subBtn = document.querySelector("#todo-form-submit")
const projectBtn = document.querySelector("#project-submit")
const projSection = document.querySelector("#projectSection")
const createproject = document.querySelector("#createproject")
const projnameform = document.querySelector("#proj-name-form")

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
    rightSection.innerHTML = ""

    for (let x=0 ; x< todoList.length ;x++) {
        
        todos[x] = document.createElement("div")
        const todo = document.createElement("div")

        for(let y in todoList[x]) {
            todo.innerHTML += todoList[x][y] + "&emsp;"
        

        
        }
        

        todos[x].appendChild(todo)
        rightSection.appendChild(todos[x])
    } 
    
}

subBtn.addEventListener("click", function(e) {
    
    sub(e)
    document.querySelector(".todo-form").reset()
    console.log(todoList)
    displayTodos()

})

projectBtn.addEventListener("click", function(e) {
    projName(e)
    projectTitle = projName(e)
    document.querySelector(".project-form").reset()
    
    const newProj = document.createElement("div")
    newProj.innerHTML += projectTitle
    projSection.appendChild(newProj)
    projnameform.classList.add("form")

})

createproject.addEventListener("click", function(e) {
    projnameform.classList.remove("form")
})

export {title, description, dueDate, priority,rightSection,sub}