const express = require("express")

const app = express()


const port = 8000

app.get("/", (req, res)=>{
    res.json({"message":"This is Home page"})
   
})

app.get("/users", (req, res)=>{
    res.json({"message":"get all the users"})
   
})

app.get("/users/:id", (req, res)=>{
    res.json({"message":`get user with id ${req.params.id}`})
   
})

app.post("/users/", (req, res)=>{
    res.json({"message":`create a new user`})
   
})

console.log("waah kya scene hai")

app.put("/users/", (req, res)=>{
    res.json({"message":`Update  user with id ${req.params.id}`})
   
})

app.delete("/users/", (req, res)=>{
    res.json({"message":`Delete user with id ${req.params.id}`})
   
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})