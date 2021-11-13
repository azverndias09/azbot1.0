const express = require("express")

const server = express()

server.all("/",(req,res)=> {

    res.send("My bot running ")



 })



function keepAwake(){

server.listen(3000,()=>{
console.log("server ready")

})

}

module.exports = keepAwake