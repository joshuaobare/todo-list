import './style.css'
import {title,description,dueDate,priority,rightSection} from './DOM.js'

class Todos {
    constructor(title, description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

}

function inputs() {
    let newTodo = new Todos(title.value,description.value,dueDate.value,priority.value)

}
 