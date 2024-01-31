const taskModel = require('../model/task.model')

async function create(data){
    return await taskModel.create(data)
}
async function read(filter){
    console.log("🤟");
    return await taskModel.find(filter)
}


module.exports ={create, read}