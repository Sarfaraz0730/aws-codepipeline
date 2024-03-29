const express = require("express");
const cors = require("cors");
const uploadImage = require("./uploadImage.js");
const aws_upload = require("./uploadImage_S3.js")
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/upload_aws", (req, res) => {
    console.log("image upload process started")
  aws_upload(req.body.image)
    .then((url) => res.send(`Image is uploaded and their url ${url}`))
    .catch((err) => res.status(500).send(`Image is not uploaded  due to this error ${err}`));


});

app.post("/uploadMultipleImages", (req, res) => {
  uploadImage
    .uploadMultipleImages(req.body.images)
    .then((urls) => res.send(urls))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});