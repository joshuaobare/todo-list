import './style.css'
import {inputs,newtodoList} from "./controller.js"
import {displayTodos,sub,hmeBtn,sideBar} from "./DOM.js"
import {today} from "./today"
import { retrieveProjects, retrieveTasks, storeTasks, retrieveTitles } from './storage'
/*import home from "./icons/home.svg"
import tod from "./icons/today.svg"
import task from "./icons/task.svg" */

let todoList,myprojects, projectnames
  

if ("todoList" in localStorage) {
    todoList = retrieveTasks()

    displayTodos()
}

else {
    todoList = []
}

if ("myprojects" in localStorage) {
    myprojects = retrieveProjects()
    projectnames = retrieveTitles()
    sideBar()
}
else {
    myprojects = []
    projectnames = []
}


export {todoList, myprojects, projectnames}