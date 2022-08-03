function storeProjects(x) {
   
    localStorage.setItem("myprojects",JSON.stringify(x))
}

function storeTasks(x) {
    
   
    localStorage.setItem("todoList",JSON.stringify(x))
    
}

function storeTitles(x) {
    localStorage.setItem("projtitles",JSON.stringify(x))
}

function retrieveProjects() {

   return JSON.parse(localStorage.getItem("myprojects"))
}

function retrieveTasks() {
    return JSON.parse(localStorage.getItem("todoList"))
}

function retrieveTitles() {
    return JSON.parse(localStorage.getItem("projtitles"))
}

export { storeProjects, storeTasks, retrieveProjects , retrieveTasks, storeTitles, retrieveTitles }