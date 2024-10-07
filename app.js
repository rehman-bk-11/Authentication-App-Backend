const express=require("express")
const signupRoute = require("./src/routes/signup")
const loginpRoute = require("./src/routes/login")
const bodyParser = require("body-parser")
const cors = require("cors")
const app=express();
const PORT=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())
app.use("/user",signupRoute);
app.use("/auth", loginpRoute)

app.listen(PORT,()=>{
    console.log(`Server is Running on: http://localhost:${PORT}`)
})