
//4 endpoints for todo app
//have a unique id for each todo
//store data in todo.json for persistent data(use fs module for this)
//add user logic


const express=require('express')
const fse=require('fs-extra')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello hello!!!')
})





app.listen(3000)