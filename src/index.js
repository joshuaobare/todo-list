import './style.css'
import {inputs,newtodoList} from "./controller.js"
import {displayTodos,sub,hmeBtn} from "./DOM.js"
import {today} from "./today"
import { retrieveTasks,storeTasks } from './storage'

let todoList

if ("todoList" in localStorage) {
    todoList = retrieveTasks()

    displayTodos()
}

else {
    todoList = []
}



export {todoList}