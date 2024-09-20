const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const User= new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
})


const TODO= new Schema({
    description:String,
    Done:Boolean,
    UserId:ObjectId

})

const UserModel=mongoose.model('Users',User);
const TODOModel=mongoose.model('TODO',TODO);

module.exports={
    UserModel:UserModel,
    TODOModel:TODOModel 
}