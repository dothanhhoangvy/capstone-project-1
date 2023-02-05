const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Port = process.env.port||5000;

// mongoose.connect("mongodb+srv://capstoneproject:capstoneprojectpassword@cluster0.kfrq5ns.mongodb.net/mydatabase?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
//     userCreateIndex:true,
//     useUnifiedTopology:true,
// });
// const connection = mongoose.connection;
// connection.once("open",()=>{
//     console.log("MongoDB connected");
// })


const uri="mongodb+srv://capstoneproject:capstoneprojectpassword@cluster0.kfrq5ns.mongodb.net/mydatabase?retryWrites=true&w=majority";
// const req = require("express/lib/request");
async function connect(){
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("MongoDb connected");
    }catch(error){
        console.error(error);
    }
}  
connect();

//niddleware
app.use(express.json());
const userRoute
 = require("./routes/user");
 app.use("/user",userRoute);


app.route("/").get((req,res)=>res.json("your first rest api capstone1"));

app.listen(Port,()=>console.log(`your server running on port ${Port}`));




