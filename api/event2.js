const EventEmitter = require('events');

class CustomEvent extends  EventEmitter{}

const ce = new CustomEvent();

ce.once('test',()=>{  //只生效一次
    console.log('test event');
})

setInterval(()=>{
    ce.emit('test')  //test event
})