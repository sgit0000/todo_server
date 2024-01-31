const taskController = require('../DL/controller/task.controller')


async function addNewTask(data){
    return await taskController.create(data)
}
async function getAllTask(){
    return await taskController.read()
}


module.exports = {addNewTask, getAllTask}