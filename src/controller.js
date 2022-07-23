import {title, description, dueDate, priority,title2, description2,dueDate2,priority2} from './DOM.js'

const todoList = []
 
function Projects(name,project) {
    this.name = name
    this.project = project
    this.info = function() {
        console.log(name)
    }
}

class Todos {
    constructor(title, description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

}

function createProjects(name) {
    let todo = new Todos(title2, description2,dueDate2,priority2)
    const proj = new Projects(name,todo)
    console.log(todo.title)
    console.log(proj)
}

function inputs(name) {
    let newTodo = new Todos(title,description,dueDate,priority)
    todoList.push(newTodo)
    const defaultProject = new Projects(name,newTodo)
    
}




export {inputs,createProjects, todoList}