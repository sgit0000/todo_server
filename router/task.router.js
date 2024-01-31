const express = require ('express')
const router = express.Router()


router.get('/',(req,res)=>{

})

module.express = router
// router.get('/',(req,res)=>{

//     res.send(users)

// })
// router.get('/:id',(req,res)=>{
//     req.params.id
//     let user = users.find((user)=>user.id == req.params.id ) 
//     user? 
//     res.send( user ):
//     res.status(400).send("user not exist")
// })
// router.get('/name/:name',(req,res)=>{
//     res.send(".3👈👈👈")
// })
// router.post('/',(req,res)=>{
//     // req.body...
//     res.send(".👈👌")
// })
// router.put('/:id',(req,res)=>{
//     // {...users...newkey:"newvalu"}
//     res.send(".🤟🤟")
// })
// router.delete('/:id',(req,res)=>{
//     let userIndex = users.findIndex((user)=>user.id == req.params.id )
//     res.send(userIndex)
//     if(userIndex==-1){

//         users.splice(userIndex,1)
//         res.send(users + "updeted")
       
//     }
//     else res.status(400).send("user not exist")
    
   
    
// })


// module.exports= router