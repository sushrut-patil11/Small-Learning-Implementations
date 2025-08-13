//creating a small http servers using express

const express=require('express')
const app=express()


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/test',(req,res)=>{
    res.send('Hello from test suite!!')
})







 app.listen(3000)