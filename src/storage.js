function storeProjects(x) {
   
    localStorage.setItem("myprojects",JSON.stringify(x))
}

function storeTasks(x) {
    
   
    localStorage.setItem("todoList",JSON.stringify(x))
    
}

function retrieveProjects() {

}

function retrieveTasks() {
    
}

export { storeProjects, storeTasks }