const http = require("http")
const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8001;






app.get('/', (req, res) => {
    res.send('Hello World, from express');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
