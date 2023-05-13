const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "AKIA6ASZAF6SPV24HJGC",
  secretAccessKey: "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",
});

const s3 = new AWS.S3({ params: { Bucket: "busa-sarfaraz-file-upload" } });

module.exports= aws_upload = (params)=>{
    return new Promise((resolve, reject)=>{
    

        const {filename, file} = params;
        console.log("params", params)
        const buf = Buffer.from(file.replace(/^data:.+;base64,/, ""), "base64");
        const  currentTime =new Date().getTime()
        const data = {
            key: `${filename}_${currentTime}`,
            body:buf,
            ContentEncoding:"base64",
            ACL:"public-read"
        }




        s3.putObject(data, (err, data) => {
            if (err) {
              console.log(`Error Uploading file : ${err}`);
              reject(err)
            } else {
                resolve({url})
                const url = `https://busa-sarfaraz-file-upload.s3.amazonaws.com/${filename}_${currentTime}`
              console.log(`File uploaded Successfully. File Url : ${url}`)
            }
          });
    })

   
}

