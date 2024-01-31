const express = require ('express')
const app = express()

const db = require('./db')
db.connect()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const taskRouter = require('./router/task.router')
app.use('/user:id', taskRouter)

app.listen(2500,()=>console.log("****The Server is UP****"));
