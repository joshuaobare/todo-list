import {title, description, dueDate, priority,rightSection,sub} from './DOM.js'

const todoList = []
 
class Todos {
    constructor(title, description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

}

function inputs() {
    let newTodo = new Todos(title,description,dueDate,priority)
    todoList.push(newTodo)
}

function displayTodos() {
    rightSection.innerHTML = ""

   /* for (let x=0 ; x< todoList.length ;x++) {
        

    } */}

export {displayTodos,inputs, todoList}