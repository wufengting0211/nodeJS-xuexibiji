// Buffer 用于处理二进制数据流

// 实例类似整数数组，大小固定

// c++ 代码在V8堆外分配物理内存

// console.log(Buffer.alloc(10)); //<Buffer 00 00 00 00 00 00 00 00 00 00>
// console.log(Buffer.alloc(20)); //<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// console.log(Buffer.alloc(5,1)); //<Buffer 01 01 01 01 01>
// console.log(Buffer.allocUnsafe(5,1)); //<Buffer 00 00 00 00 03>
// console.log(Buffer.from([1,2,3])); //<Buffer 01 02 03>
//
// const buf = Buffer.from('this is a test!');
// console.log(buf.length); //15
//
// const buf2 = Buffer.allocUnsafe(10);
//
// buf2[0] = 2;
// console.log(buf2.length);  //10
//
// console.log(buf.toString('base64'));// dGhpcyBpcyBhIHRlc3Qh
//console.log(process); //对象 node项目的所有目录


console.log(Buffer.byteLength('test'));  //占用字节数 4
console.log(Buffer.byteLength('测试'));  //占用字节数 6

console.log(Buffer.isBuffer({}));  //检测是否是一个buffer对象 false
console.log(Buffer.isBuffer(Buffer.from([1,2,3])));  //检测是否是一个buffer对象 true


const buf1 = Buffer.from('this ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('a ');
const buf4 = Buffer.from('test ');
const buf5 = Buffer.from('! ');

const buf = Buffer.concat([buf1,buf2,buf3,buf4,buf5]); //buffer拼接

console.log(buf.toString());  //转化成字符串输出 this is a test !
console.log(buf.toString('base64'));  //转化base64输出 dGhpcyBpcyBhIHRlc3QgISA=


const buf21 = Buffer.allocUnsafe(10);

buf21[0]= 2;

console.log(buf21.length); //10

const buf41 = Buffer.from('test');
const buf42 = Buffer.from('test');
const buf43 = Buffer.from('test!');

console.log(buf41.equals((buf42))); //ture  判断buf41与buf42是否相等
console.log(buf41.equals((buf43)));  //false 判断buf41与buf43是否相等

console.log(buf41.indexOf('es'));  //1   找得到就返回下标
console.log(buf41.indexOf('esa'));  //-1  找不到就返回-1 用于判断是否含有字符

