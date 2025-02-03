// 事件驱动 事件触发

const EventEmitter = require('events');

class CustomEvent extends  EventEmitter {

}
const  ce =  new CustomEvent();  //声明事件

ce.on('test',()=>{  //注册监听器
    console.log('this is a test!');
})

setInterval(()=>{
    ce.emit('test') //触发test事件输出： this is a test!
},500);