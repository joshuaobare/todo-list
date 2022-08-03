function storeProjects(x) {
   
    localStorage.setItem("myprojects",JSON.stringify(x))
}

function storeTasks(x) {
    
   
    localStorage.setItem("todoList",JSON.stringify(x))
    
}

function retrieveProjects() {

   return JSON.parse(localStorage.getItem("myprojects"))
}

function retrieveTasks() {
    return JSON.parse(localStorage.getItem("todoList"))
}

export { storeProjects, storeTasks, retrieveProjects , retrieveTasks }