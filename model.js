const mongoose = require("mongoose");
const table = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    age:{
        type:Number,
        default:0,
    },
});
const User = mongoose.model("User",table);
module.export=User;