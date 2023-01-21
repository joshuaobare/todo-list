import './style.css'
import {inputs,newtodoList} from "./controller.js"
import {displayTodos,sub,hmeBtn,sideBar} from "./DOM.js"
import {today} from "./today"
import { retrieveProjects, retrieveTasks, storeTasks, retrieveTitles } from './storage'

let todoList, myprojects, projectnames
  

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