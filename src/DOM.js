import {inputs,todoList} from "./controller.js"

let title 
let description 
let dueDate 
let priority
let project
let projectTitle

const todos = []
const projectContainer = document.querySelector("#projectContainer")
const rightSection = document.querySelector("#rightSection")
const subBtn = document.querySelector("#todo-form-submit")
const projectBtn = document.querySelector("#project-submit")
const projSection = document.querySelector("#projectSection")
const createproject = document.querySelector("#createproject")
const projnameform = document.querySelector("#proj-name-form")
const taskadder = document.querySelector("#addtask")
const todoform = document.querySelector("#main-form")
const projecttab = document.querySelectorAll(".projectname")


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

function projTab(e) {
    rightSection.innerHTML = ""
    const projectHeader = document.createElement("h1")
    projectHeader.innerHTML = e.target.id
    console.log(e)
    rightSection.appendChild(projectHeader)
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
    newProj.setAttribute("class","projectname")
    newProj.setAttribute("id",projectTitle)
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

projSection.addEventListener('click', function(e) {
    if(e.target.classList.contains('projectname')) {
        projTab(e);
        console.log(e)
    };
  } );

/*
projecttab.forEach((proj) => {

    proj.addEventListener("click", function(e) {
    
       // projTab(e)
        //console.log(e)
        console.log("nini wewe")
    })
})
*/


export {title, description, dueDate, priority,sub}