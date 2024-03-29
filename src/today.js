import { compareAsc, format, parseISO } from "date-fns/esm";
import { todoList, myprojects } from "./controller"
import { projectsToday, tasksToday } from "./DOM"


let today = format(new Date(),"yyyy-MM-dd" )

function projectDate(tab) {

    const arr = myprojects.filter((proj) => {
        let x = parseISO(proj.project.dueDate)
        console.log(x)
        const testdate = format(new Date(x),"yyyy-MM-dd")
        console.log(testdate)
        if(compareAsc(parseISO(testdate),parseISO(today) ) == 0){
            return true
        }
    })
    console.log(arr)

    arr.forEach((proj) => {
        projectsToday(proj,tab)
    })
    

}

function taskDate() {

    const arr = todoList.filter((proj) => {
        const testdate = format(new Date(proj.dueDate),"yyyy-MM-dd")
        if(compareAsc(parseISO(testdate),parseISO(today) ) == 0){
            return true
        }
    })

    tasksToday(arr)
}






export {today,projectDate,taskDate}