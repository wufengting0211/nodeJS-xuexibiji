// const {normalize}  = require('path');
// //const normalize  = require('path').normalize;
// normalize() //处理路径
// console.log(normalize('/usr//local/bin')); //\usr\local\bin
// console.log(normalize('/usr//local/../bin'));  //\usr\bin

// const {join} =require('path');
// join() //路径拼接
// console.log(join('/usr','local','bin/')) //\usr\local\bin\
// console.log(join('/usr','../local','bin/')) //\local\bin\
//
// const {resolve} =require('path');
// resolve() //把相对路径解析成绝对路径
// console.log(resolve('./')) //C:\Users\123\Desktop\nodejs\api
//
// const filePath = '/usr/local/bin/no.txt';
// console.log(basename(filename))  //no.txt
// console.log(dirname(filename))  //usr/local/bin
// console.log(extname(filename))  //.txt

const {parse,format} = require('path');

const filename = '/usr/local/node_module/n/package.json';

const ret = parse(filename);

console.log(ret);  //{ root: '/',dir: '/usr/local/node_module/n',base: 'package.json',ext: '.json',name: 'package' }

console.log(format(ret)); //还原 /usr/local/node_module/n\package.json

const {sep, delimiter,win32,posix} = require('path');

console.log('sep', sep);
console.log('win PATH', win32.sep);
console.log('PATH', process.env.PATH);
console.log('delimiter', delimiter);
console.log('win delimiter', win32.delimiter);

console.log(posix);