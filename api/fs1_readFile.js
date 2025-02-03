const fs = require('fs');

fs.readFile('./event3.js','utf-8',(err,data)=>{  //异步操作读取event3.js的内容
    if(err) throw err;
    console.log(data);
});

const data = fs.readFileSync('./path.js','utf-8');//同步操作 读取path.js
console.log(data);
