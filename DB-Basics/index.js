const express = require("express");
const app = express();

const jwt=require("jsonwebtoken");
const JWT_Secret="Ganapati_Bappa_Morya";

app.use(express.json());

const {UserModel,TodoMpdel}=require('./db');


app.post("/signup", async function(req, res) {

    const mailId=req.body.email;
    const name=req.body.name;
    const password=req.body.password;

    await UserModel.create({
        email:mailId,
        password:password,
        name:name
    });

    res.json({
        message:"You are Signed Up"
    })
    
});


app.post("/signin", async function(req, res) {

    const mailId=req.body.email;
    const password=req.body.password;

    const response=await UserModel.findOne({
        email:mailId,
        password:password
    });

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        })

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", function(req, res) {

});


app.get("/todos", function(req, res) {

});

app.listen(3000);