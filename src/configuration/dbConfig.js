const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/jwt_db");
mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDb")
});

mongoose.connection.on("error",(err)=>{
    console.log(`MongoDb connection eror: ${err}`)
})

module.exports= mongoose;