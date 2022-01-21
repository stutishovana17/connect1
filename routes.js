const express = require("express");
const  mongoose  = require("mongoose");
const {User} = require("./model");
const app = express();
app.post("/add_user",async(req,res)=>{
    const data = mongoose.model("User",User);
    const user = new data({
        "name":"stuti",
        "age":"23"
    });

    

    try{
        await user.save();
        res.send(user);
    }catch(error){
        res.status(500).send(error);
    }

});
app.get("/user",async(req,res)=>{
    const data = mongoose.model("User",User);
    const users= await data.find({});
    try{
        res.send(users);
    }catch(error){
        res.status(500).send(error);
    }
});
module.exports= app;
