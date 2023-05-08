const http = require("http")
const express = require("express")
const MongoClient = require("mongodb");
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8001;

const url = 'mongodb://localhost:27017/myDB';
// const dbname = "conFusion";
MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
})




app.get('/', (req, res) => {
    res.send('Hello World, from express');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
