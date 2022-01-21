const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const app = express();
const username="stuti";
const password="Stuti123";
const cluster="details";
const dbname="student";
app.use(express.json());


mongoose.connect('mongodb+srv://stuti:Stuti123@details.jipgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{

   useNewUrlParser:true,
   //useFindAndModify: false,
   useUnifiedTopology: true
   


});
const db= mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",function(){
    console.log("connected succesfully");
});
app.use(Router);
app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

