import {inputs,todoList} from "./controller.js"

let title 
let description 
let dueDate 
let priority
const todos = []
const rightSection = document.querySelector("#rightSection")
const subBtn = document.querySelector("#submit")


function sub(e) {
    e.preventDefault()
    
    title = document.querySelector("#title").value
    description = document.querySelector("#description").value
    dueDate = document.querySelector("#dueDate").value
    priority= document.querySelector('input[name="priority"]:checked').value
    inputs()
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
    document.querySelector("form").reset()
    console.log(todoList)
    displayTodos()

})

export {title, description, dueDate, priority,rightSection,sub}