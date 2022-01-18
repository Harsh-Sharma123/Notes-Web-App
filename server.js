const express = require("express")
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to  mongoose
mongoose.connect("mongodb+srv://Harsh:Harsh@cluster0.e6qrw.mongodb.net/notesDB?retryWrites=true&w=majority")

//require route
app.use("/", require("./Routes/noteRoute"));

app.listen(3001, function(){
    console.log("App is listening at http://localhost:3001");
});