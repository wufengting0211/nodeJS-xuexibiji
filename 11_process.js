// const {argv,argv0,execArgv,execPath} = process;
//
// argv.forEach(item=>{
//     console.log(item);
//     //C:\Program Files\nodejs\node.exe  node路径
//     //C:\Users\123\Desktop\nodejs\11_process.js  文件路径
// });
// console.log(argv); //[ 'C:\\Program Files\\nodejs\\node.exe','C:\\Users\\123\\Desktop\\nodejs\\11_process.js' ]
// console.log(argv0); //C:\Program Files\nodejs\node.exe
// console.log(execArgv); //[]
// console.log(execPath); //C:\Program Files\nodejs\node.exe
//
// const {env} = process;
//
// console.log(env); //对象 当前所有的属性
//
//
// console.log(process.cwd()); //当前命令所执行的路径

setImmediate(()=>{
    console.log('setImmediate');
})

setTimeout(()=> {
    console.log('timeout');
},0);

process.nextTick(()=>{
    console.log('nextTick');
})
//nextTick
//timeout
//setImmediate