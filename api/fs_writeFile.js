const fs = require('fs');
const content = Buffer.from('this is a test.');
fs.writeFile('./text',content,{ //创建text文件并录入内容
    encoding:'utf-8'
},err=>{
    if(err) throw err;
    console.log('done!');
})