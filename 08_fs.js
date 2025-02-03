const fs = require('fs');

let res= fs.readFile('./08_fs.js',(err,data)=>{
    if(err) {
        console.log(err);
    }else {
        console.log(data);
    }
});
console.log(res);
