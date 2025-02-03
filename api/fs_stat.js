const fs = require('fs');

fs.stat('./fs_stat.js',(err,stats) =>{ //判断文件是否存在，并读取文件信息
    if(err) {
        console.log('文件不存在');
        return
    }

    console.log(stats .isFile()); //是否是文件
    console.log(stats.isDirectory());  //是否是文件夹
    console.log(stats);  //文件详细信息
})