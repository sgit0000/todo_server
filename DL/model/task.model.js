const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskNane:{
        typeof: String,
        require: true
    },
    deadline:{
        typeof: Date,
        require:true
    },
    done:{
        typeof: Boolean,
        default: false
    },
    isActive:{
        typeof:Boolean,
        default:true
    }

})

const taskModel = mongoose.model('task',taskSchema)
module.exports =taskModel

//rders :[{
//         type: mongoose.SchemaType.objectId,
//         ref: 'order'
        
//     }],
//   permission :{
//     type: String,
//     enum: ['user','admin'],
//     default: "user"
        
// },
//    isActive :{
//     type: Boolean,
//     default: true
        
//    },

// })


// const userModel = mongoose.model('item',userSchema)
// module.exports = userModel