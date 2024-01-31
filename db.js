const mongoose = require ('mongoose')

const jtw = require('dotenv')
Mongo_Uri = process.env.Mongo_Uri

function connect(){
try{}
catch(err){
    console.log("mongooseDB error:",err);
}
}

module.exports = {connect}