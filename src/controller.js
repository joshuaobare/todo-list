import {title, description, dueDate, priority,title2, description2,dueDate2,priority2} from './DOM.js'
import { storeProjects, storeTasks, retrieveTasks} from './storage.js'
import { todoList, myprojects } from './index.js'


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
    let todo = new Todos(name, description2,dueDate2,priority2)
    const proj = new Projects(name,todo)
    myprojects.push(proj)
    storeProjects(myprojects)
    console.log(localStorage)

   /* console.log(todo.title)
    console.log(proj)
    console.log(myprojects) */
}

function inputs() {
    let newTodo = new Todos(title,description,dueDate,priority)
    todoList.push(newTodo)
    storeTasks(todoList)
    console.log(localStorage)
    /*newtodoList = retrieveTasks()
    console.log(newtodoList)*/
    
}




export {inputs,createProjects,myprojects, todoList }