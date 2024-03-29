import {inputs,todoList,myprojects,createProjects} from "./controller.js"
import {projectDate,taskDate} from "./today"
import { retrieveProjects , retrieveTasks , storeProjects, storeTasks , storeTitles} from "./storage"
import {newtodoList, projectnames} from "./index"


let title, description, dueDate, priority,projnamecont,projarr , individualproj, individualprojid
let title2, description2,dueDate2,priority2, project , projectTitle, delProj 
const todos = []

const projectContainer = document.querySelector("#projectContainer")
const projectContainer2 = document.createElement("div")
projectContainer2.id = "projectContainer2"
const rightSection = document.querySelector("#rightSection")
const subBtn = document.querySelector("#todo-form-submit")
const subBtn2 = document.querySelector("#project-todo-form-submit")
const currentproject = document.querySelector("#currentproject")
const currenttask = document.querySelector("#currenttask")
const projectBtn = document.querySelector("#project-submit")
const projSection = document.querySelector("#projectSection")
const createproject = document.querySelector("#createproject")
const projnameform = document.querySelector("#proj-name-form")
const taskadder = document.querySelector("#addtask")
const todoform = document.querySelector("#main-form")
const projecttodoform = document.querySelector("#secondary-form")
const home = document.querySelector("#home")
const today = document.querySelector("#today")
const mainformdialog = document.querySelector("#main-form-dialog")
const secondaryformdialog = document.querySelector("#secondary-form-dialog")
const projnameformdialog = document.querySelector("#proj-name-form-dialog")
const currentprojectdialog = document.querySelector("#current-project-dialog")
const currenttaskdialog = document.querySelector("#current-task-dialog")
const alldialogs = document.querySelectorAll("dialog")
const projecttab = document.querySelectorAll(".projectname")
const navIcon = document.querySelector(".header-nav-icon")
const navBar = document.querySelector("#navBar")
const projectHeader = document.createElement("h1")
let delbtn = document.createElement("button")
delbtn.innerHTML = "Delete"
delbtn.id = "delbtn"

let taskdelbtn = document.createElement("button")
taskdelbtn.innerHTML = "Delete"
taskdelbtn.id = "taskdelbtn"

let projprioritybtn = document.createElement("button")
projprioritybtn.innerHTML = "Priority"
projprioritybtn.id = "projprioritybtn"

let taskprioritybtn = document.createElement("button")
taskprioritybtn.innerHTML = "Priority"
taskprioritybtn.id = "taskprioritybtn"


// take a guess about what elementCreator does
function elementCreator(el,type,class_name,id_name,innertext) {
    el = document.createElement(type)
    el.classList.add(class_name)
    el.setAttribute("id",id_name)
    el.textContent = innertext

    return el

}

// addTask is used to create tasks on each individual project tab  

const addTask = elementCreator("addTask","button","proj-task-btn","proj-task-btn","Add Task")
const homeheader = elementCreator("homeheader","h1","homeHeader","homeHeading","Home")



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// sub function retrieves task form values and calls input which creates the task objects

function sub(e) {
    e.preventDefault()
    title = document.querySelector("#title").value
    description = document.querySelector("#description").value
    dueDate = document.querySelector("#dueDate").value
    priority= document.querySelector('input[name="priority"]:checked').value
    inputs()
}

// projSub function retrieves project form values and creates the project objects

function projSub(e) {
    e.preventDefault()
    description2 = document.querySelector("#description2").value
    dueDate2 = document.querySelector("#dueDate2").value
    priority2 = document.querySelector('input[name="priority2"]:checked').value
    createProjects(projnamecont)
}

// projName function retrieves the project name

function projName(e){
    e.preventDefault()
    project = document.querySelector("#project-name").value
   // projectnames.push(project)
    return project
}

// displayTodos retrieves tasks from todoList array and displays just their title and dueDate into projectContainer

function displayTodos() {
    projectContainer.innerHTML = ""
    let checkbx

    for (let x=0 ; x< todoList.length ;x++) {
        
        todos[x] = document.createElement("div")
        
       
        let div,z 

        checkbx = document.createElement("input")
        checkbx.type = "checkbox"
        checkbx.classList.add("checkbx")
        todos[x].appendChild(checkbx)

        for(let y in todoList[x]) {

            // just the title and dueDate are added to divs
                          
               
               
            if ((y === "title") || (y === "dueDate")) {

                
                div = document.createElement("div")
                div.classList.add("home-todo-element")
                //div.appendChild(checkbxcont)
                
                div.innerHTML += todoList[x][y] + "&emsp;"

                /* each div will have the task title as its class.
                   the try...catch block adds dashes to classes with spaces as it wouldn't work otherwise */

                try {
                    todos[x].classList.add(todoList[x].title, "home-todos")
                }
                catch {
                    z = todoList[x].title.split(" ")
                    todos[x].classList.add(z.join('-'),"home-todos")
                }
            }                       
            
            
            //todos[x].appendChild(div2)
            todos[x].appendChild(div)                
        }     
             
        projectContainer.appendChild(todos[x])
    } 
    
}

// tasksToday is essentially displayTodos but to the "Today" tab. It also allows an argument unlike displayTodos

function tasksToday(array) {
    
    for (let x=0 ; x< array.length ;x++) {
        
        todos[x] = document.createElement("div")
       
        let div,z,checkbx

        checkbx = document.createElement("input")
        checkbx.type = "checkbox"
        checkbx.classList.add("checkbx")
        todos[x].appendChild(checkbx)

        for(let y in array[x]) {

            if ((y === "title") || (y === "dueDate")) {

                div = document.createElement("div")
                div.classList.add("home-todo-element")
                div.innerHTML += array[x][y] + "&emsp;"

                try {
                    todos[x].classList.add(array[x].title, "home-todos")
                }
                catch {
                    z = array[x].title.split(" ")
                    todos[x].classList.add(z.join('-'),"home-todos")
                }
            }
            todos[x].appendChild(div)                
        }
        
        projectContainer2.appendChild(todos[x])
    } 
    
}

// projectPriority alters the project's priority

function projectPriority(e) {
    
    // finds the index of the project whose description is the same as the target element's class

    const index = myprojects.findIndex((proj) => {
        return proj.project.description == e.target.dataset.info
    })
    console.log(e.target.classList)
    console.log(index)
    console.log(myprojects[index])

    // the priority is switched from the current one to the opposite one

    if(myprojects[index].project.priority === "High Priority") {
        myprojects[index].project.priority = "Low Priority"
    }

    else if(myprojects[index].project.priority === "Low Priority") {
        myprojects[index].project.priority = "High Priority"
    }

}

// taskPriority alters the task's priority and works exactly like projectPriority

function taskPriority(e) {
    const index = todoList.findIndex((proj) => {
        return proj.title == e.target.dataset.info
    })

    /*if (index == "-1") {
        index = index.split("-").join(" ")
    }*/

    if(todoList[index].priority === "High Priority") {
        todoList[index].priority = "Low Priority"
    }

    else if(todoList[index].priority === "Low Priority") {
        todoList[index].priority = "High Priority"
    }

}

// iterate displays the projects onto their individual tabs

function iterate(obj,tab) {
    rightSection.innerHTML = ""
    individualproj = document.createElement('div')
    let projbtncont = document.createElement("div")
    projbtncont.classList.add("projbtncont")
    let checkbx
    // projnamecont holds the name of the current project name, this is set to the project tab's heading

    projectHeader.innerHTML = projnamecont

    // we want the delete button to also hold this value so that when we want to delete it it's easily accessible

    delProj = elementCreator("delProj","button","delProj","delProj","Delete Project")
    delProj.setAttribute("data-info",projnamecont)
        
    rightSection.appendChild(projectHeader)
    rightSection.appendChild(projectContainer)
    projbtncont.appendChild(addTask)


    checkbx = document.createElement("input")
        checkbx.type = "checkbox"
        checkbx.classList.add("checkbx")
        individualproj.appendChild(checkbx)

    // the if block prevents adding another delete button each time the project's tab is clicked 

    if (rightSection.contains(delProj)){
        return
    }
    else {
        projbtncont.appendChild(delProj)
        }
    
    rightSection.appendChild(projbtncont)
    // this function loops through each object and its contents and displays them onto projectContainer

    Object.keys(obj).forEach(key => { 
     
    // deals with nested objects by looping once again

    if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        }
    else {
            // only description and dueDate are displayed

            if((key === 'name') || (key === 'title') || (key === 'info') || (key === 'priority')) {
                return
            }

            if ((key == 'name') && (key !== tab)) {
                return
            }
            else {
                                
                    if (key === "description") {
                        individualprojid = obj[key]
                    }
                    
                    // try...catch adds dashes to classes with spaces 
                    try{
                        individualproj.classList.add(individualprojid, "project-todos")
                    }
                    catch {
                        let x = individualprojid.split(" ")
                        individualprojid = x.join('-')
                        individualproj.classList.add(individualprojid)
                    }
                    let div = document.createElement("div")
                    div.classList.add("project-todo-element")
                    div.innerHTML = `${obj[key]}`
                    individualproj.appendChild(div)
                    projectContainer.appendChild(individualproj)
                                                                      
            }
            
        }            
    })
}

// projectsToday works same as iterate but displays to Today tab

function projectsToday(obj,tab) {
    rightSection.innerHTML = ""
    let thisproj = document.createElement('div')
    let thisprojid,checkbx
       
        checkbx = document.createElement("input")
        checkbx.type = "checkbox"
        checkbx.classList.add("checkbx")
        thisproj.appendChild(checkbx)


    Object.keys(obj).forEach(key => {

    
    if (typeof obj[key] === 'object' && obj[key] !== null) {
        projectsToday(obj[key])
        }
    else {
            if((key === 'name') || (key === 'title') || (key === 'info') || (key === 'priority')) {
                return
            }

            if ((key == 'name') && (key !== tab)) {
                return
            }
            else {
                
                    if (key === "description") {
                        thisprojid = obj[key]
                    }

                    try{
                        thisproj.classList.add(thisprojid, "project-todos")
                    }
                    catch {
                        let x = thisprojid.split(" ")
                        thisprojid = x.join('-')
                        thisproj.classList.add(thisprojid)
                    }
                    let div = document.createElement("div")
                    div.classList.add("project-todo-element")
                    div.innerHTML = `${obj[key]}`
                    thisproj.appendChild(div)
                    projectContainer.appendChild(thisproj)

            }
            
        }            
    })
}

function deleteProjects(e){

    const index = myprojects.findIndex((proj) =>{
        return proj.project.description == e.target.classList
    })

    console.log(index)
    myprojects.splice(index,1)
    storeProjects(myprojects)
    console.log(myprojects)

}

function deleteTasks(e) {

    let x = e.target.className
    console.log(x)
    const index = todoList.findIndex((proj) => {
        return proj.title === x
    })

    console.log(index)
    todoList.splice(index,1)
    storeTasks(todoList)
    console.log(todoList)
}

/* deleteProjCont deletes the entire project container i.e every occurence of a project with the same project name
 as opposed to description as deleteProjects does */ 

function deleteProjCont(e) {
    
    console.log(e.target.dataset.info)
    const arr = myprojects.filter((proj) => {
        if (proj.name === e.target.dataset.info) {
            
            return true
        }
    })
    
    console.log(arr)

    arr.forEach((proj) => {
        const index = myprojects.indexOf(proj)
        console.log(index)
        myprojects.splice(index,1)
    })

    storeProjects(myprojects)
   
    console.log(myprojects)
}

// projTab displays the tab for each individual project that's clicked

function projTab(e) {
    rightSection.innerHTML = ""
    
    projectHeader.classList.add("homeHeading")
    
    projectHeader.innerHTML = projnamecont
    
    
    projectContainer.innerHTML = ""
    

    rightSection.appendChild(projectHeader)
    rightSection.appendChild(projectContainer) 
    rightSection.appendChild(addTask)

    return projnamecont
    
}

// projectChecker retrieves an array of all the objects with the same name as the current project tab name

function projectChecker(arr) {

    projarr =  arr.filter(function(project) {
          if(project.name === projnamecont) {
              return true
          }
      })
  
      return projarr
  
  }


function displayProjects(e) {
    
    projTab(e)
    const myarr = projectChecker(myprojects)

    for (let x=0 ; x < myarr.length ; x++) {

        iterate(myarr[x],e)
        
    }

}

// projectParser displays the full details of each individual project

function projectParser(obj) {
    let btncont = document.createElement("div")
    btncont.classList.add("btncont")
    let topcont =  document.createElement("div")
    topcont.classList.add("topcont")
    Object.keys(obj).forEach(key => {

    let proj_line = document.createElement("div")
        
    if (typeof obj[key] === 'object' && obj[key] !== null) {
            projectParser(obj[key])
        }

    else {
            if((key === 'name') || (key === 'info')) {
                return
            }
            else {
                if((key ==='description')){
                    delbtn.className = ""
                    projprioritybtn.className = ""
                    projprioritybtn.setAttribute("data-info",obj[key])

                    try {
                        delbtn.classList.add(obj[key])
                        projprioritybtn.classList.add(obj[key])
                    }
                    catch {
                        let x = obj[key].split(" ")
                        let new_class = x.join('-')
                        console.log(new_class)
                        delbtn.classList.add(new_class)
                        projprioritybtn.classList.add(new_class)
                    }
                       
                }
                let div = document.createElement("div")
               
                div.innerHTML += `<span style="color:black";>${capitalizeFirstLetter(key)}: </span>`  
                div.innerHTML += `${obj[key]}`
                proj_line.appendChild(div)

                btncont.appendChild(delbtn)
                btncont.appendChild(projprioritybtn)
                topcont.appendChild(proj_line)
                currentproject.appendChild(topcont)
                currentproject.appendChild(btncont)
            }     
    }})}

// displays the full details of each task    

function taskParser(obj) {
    let btncont = document.createElement("div")
    btncont.classList.add("btncont")
    let topcont =  document.createElement("div")
    topcont.classList.add("topcont")

    Object.keys(obj).forEach(key => {

        
        let task_line = document.createElement("div")

        if (typeof obj[key] === 'object' && obj[key] !== null) {
                taskParser(obj[key])
            }

        else {
                if((key === 'title')) {
                    // className is emptied for when tasks are being deleted, as it would alter the classList array indices

                    taskdelbtn.className = ""
                    taskprioritybtn.className = ""
                    taskprioritybtn.setAttribute("data-info",obj[key])
                    try {
                        taskdelbtn.classList.add(obj[key])
                        taskprioritybtn.classList.add(obj[key])
                    }

                    catch {
                        let x = obj[key].split(" ")
                        let new_class = x.join("-")
                        taskdelbtn.classList.add(new_class)
                        taskprioritybtn.classList.add(new_class)
                    }
                    
                }

                let div = document.createElement("div")
                div.innerHTML += `<span style="color:black";>${capitalizeFirstLetter(key)}: </span>`  
                div.innerHTML += `${obj[key]}`
                task_line.appendChild(div)
                btncont.appendChild(taskdelbtn)
                btncont.appendChild(taskprioritybtn)
                topcont.appendChild(task_line)
                currenttask.appendChild(topcont)
                currenttask.appendChild(btncont)
        }
        })
    }



function fetchTasks(e) {
    let taskclass

    try {
        taskclass = e.target.classList
    }
    
    catch {
        taskclass = e.classList
    }

    let current_title = taskclass[0]

    const x = todoList.filter(function(task){
        if(task.title == current_title) {
            return true
        }

        // if the task.title is different, it's probably cause of the dashes that were added due to spaces

        else {
            let new_title = current_title.split("-").join(" ")
            console.log(new_title)
            if(task.title == new_title){
                return true
            }
        }
    }) 

    console.log(x)

    x.forEach(obj => taskParser(obj))

}

function fetchProject(e) {
    let projclasses

    try {
        projclasses = e.target.classList  
    }
    catch {
        projclasses = e.classList
    }
    console.log(projclasses)
    let current_desc = projclasses[0] 
    console.log(current_desc)
    const myarr = projectChecker(myprojects)
    console.log(myarr)
    
    const x = myarr.filter(function(proj){

        if(proj.project.description == current_desc){
            return true
        }

        else {
            let new_desc = current_desc.split("-").join(" ")
            console.log(new_desc)
            if(proj.project.description == new_desc){
                return true
            }
        }
    })
    

    console.log(x)

    x.forEach(obj => projectParser(obj))
          
    
}

// displays the contents in the home tab

function hmeBtn() {
    rightSection.innerHTML = ""
    rightSection.appendChild(homeheader)
    rightSection.appendChild(projectContainer)
    homeheader.innerHTML = "Home"
    displayTodos()
    rightSection.appendChild(taskadder)
}

// deletes projects from the sidebar

function removeProj(e) {
    const projdivs = document.querySelectorAll(".projectname")
    console.log(projdivs)
    console.log(e.target.dataset.info)
    projdivs.forEach((div) => {
        if(div.innerHTML === e.target.dataset.info) {
            console.log(div)
            div.remove()
        }
    })
    let index = projectnames.findIndex((name) => {
        return name == e.target.dataset.info
    })

    console.log(index)
    projectnames.splice(index,1)
    storeTitles(projectnames)
}

// displays contents of the Today section

function displayToday(e) {
    rightSection.innerHTML = ""
    projectHeader.innerHTML = "Today"
    projectHeader.classList.add("homeHeading")
    projectDate(e)
    // projectContainer.innerHTML = ""
    rightSection.appendChild(projectHeader)
    const todayh1 = document.createElement("h2")
    const todayh2 = document.createElement("h2")
    todayh1.innerHTML = "Projects"
    todayh2.innerHTML = "Tasks"
    todayh1.className = "todayheader"
    todayh2.className = "todayheader"

    rightSection.appendChild(todayh1)
    rightSection.appendChild(projectContainer)
    rightSection.appendChild(todayh2)
    rightSection.appendChild(projectContainer2)  
    
}    

function sideBar() {
    projectnames.forEach((titles) => {
        const newProj = document.createElement("div")
        newProj.setAttribute("class","projectname")
        newProj.setAttribute("id",titles)

       /* if((" " in titles)){
            console.log("contains whitespace")
        }*/

        newProj.innerHTML = titles
        projSection.appendChild(newProj)
    })
}



//                  EVENT LISTENERS


subBtn.addEventListener("click", function(e) {
    
    sub(e)
    document.querySelector(".todo-form").reset()
    console.log(todoList)
    //todoform.classList.add("form")
    mainformdialog.close()
    displayTodos()

})

subBtn2.addEventListener("click", function(e){
    projSub(e)
    document.querySelector(".project-todo-form").reset()
    projecttodoform.classList.add("form")
    secondaryformdialog.close()
    displayProjects(projnamecont)
    

} )




projectBtn.addEventListener("click", function(e) {
    projName(e)
    projectTitle = projName(e)
    document.querySelector(".project-form").reset()
    projectnames.push(projectTitle)
    
    storeTitles(projectnames)
    projSection.innerHTML = ""
    sideBar()
    
    //projnameform.classList.add("form")
    projnameformdialog.close()
})

createproject.addEventListener("click", function(e) {
    //projnameform.classList.remove("form")
    projnameformdialog.showModal()
})

taskadder.addEventListener("click", function(e) {
    mainformdialog.classList.remove("form")
    mainformdialog.showModal()
})

projSection.addEventListener('click', function(e) {
    let x

    if(e.target.classList.contains('projectname')) {

        projnamecont = e.target.id
        
        
        delProj = elementCreator("delProj","button","delProj","delProj","Delete Project")
        //delProj = document.createElement("button")
        delProj.setAttribute("data-info",projnamecont) 
        

        
        displayProjects(e);
        if (rightSection.contains(delProj)){
            
            return
        }
        else {
            rightSection.appendChild(delProj)
            
        }};
  } );

  

rightSection.addEventListener('click', function(e) {
    console.log(e.target) 
    if(e.target.id == "proj-task-btn") {
        projecttodoform.classList.remove("form")
        secondaryformdialog.showModal()
           
    }
    if(e.target.classList.contains("project-todos")){
        currentproject.innerHTML = ""
        fetchProject(e)
        currentprojectdialog.showModal()

    }

    if(e.target.classList.contains("project-todo-element")){
        console.log(e.target.parentNode.classList)
        currentproject.innerHTML = ""
        e = e.target.parentNode
        fetchProject(e)
        currentprojectdialog.showModal()
    }    

    if(e.target.classList.contains("home-todos")){
        console.log(e)
        currenttask.innerHTML = ""
        fetchTasks(e)
        currenttaskdialog.showModal()
    }

    if(e.target.classList.contains("home-todo-element")){
        console.log(e.target.parentNode.classList)
        currenttask.innerHTML = ""
        e = e.target.parentNode
        fetchTasks(e)
        currenttaskdialog.showModal()
    }

    if(e.target.id == "delProj"){
        deleteProjCont(e)
        hmeBtn()
        removeProj(e)
    }
    if(e.target.classList.contains("checkbx")){
        if(e.target.parentNode.classList.contains("strike")){
            e.target.parentNode.classList.remove("strike")
        }
        else {
            e.target.parentNode.classList.add("strike")
        }
        
    }

  } );

home.addEventListener("click",hmeBtn) 
    
currentproject.addEventListener('click', function(e){
    if(e.target.id == "delbtn") {
        deleteProjects(e)
        displayProjects(e)
        currentproject.innerHTML = ""
        currentprojectdialog.close()
    }
    if(e.target.id == "projprioritybtn") {
        projectPriority(e)
        currentproject.innerHTML = ""
        fetchProject(e)
    }
})

currenttask.addEventListener('click',function(e){
    if(e.target.id == "taskdelbtn") {
        deleteTasks(e)
        displayTodos(e)
        currenttask.innerHTML = ""
        currenttaskdialog.close()
    }

    if(e.target.id == "taskprioritybtn") {
        taskPriority(e)
        currenttask.innerHTML = ""
        fetchTasks(e)
    }
})

today.addEventListener('click', (e) => {
    projectContainer.innerHTML = ""
    displayToday(e)
    projectContainer2.innerHTML = ""
    taskDate()
})

navIcon.addEventListener('click' , () => {
    if(navBar.classList.contains("show")){
        navBar.classList.remove("show")
    } else {
        navBar.classList.add("show")
    }
})

alldialogs.forEach((dialog) => {
    dialog.addEventListener("click", (e)=> {
        e.stopPropagation()
        if((e.target.tagName =="DIALOG" )) {
            dialog.close()
        }
        else {

        }})
})


export {title, description, dueDate, priority ,title2, description2,dueDate2,priority2, displayTodos, projectsToday,tasksToday,hmeBtn,sideBar}