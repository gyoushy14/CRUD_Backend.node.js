const mongoose = require("mongoose");
const url = "mongodb+srv://GH:1234@cluster0.gt2tgnd.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0";
module.exports=()=> mongoose.connect(url);