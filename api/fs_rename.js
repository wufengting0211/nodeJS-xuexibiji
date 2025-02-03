const fs =require('fs');

// fs.rename('./text','test.txt',err=>{ //修改文件名
//     if(err) throw err;
//     console.log('done!');
// });

// fs.unlink('./test.txt',err=>{}); //删除文件
//
// fs.readdir('../',(err,files)=>{ //读取文件名
//     if(err) throw err;
//
//     console.log(files);
// });

//fs.mkdir('test',err=>{}); //创建文件夹

//fs.rmdir('./test',err=>{});   //删除test文件夹

fs.watch('./',{ //监视文件
    recursive:true  //是否监视 当前文件夹以及下面的子文件夹
},(eventType,filename) =>{
    console.log(eventType, filename);
});