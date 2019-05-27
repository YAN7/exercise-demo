
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(`here is the ${message}`);
        // emit 同步调用每一个注册到messageLog事件的监听器, 从第二个参数开始为传入监听器的参数
        super.emit('messageLog', {id: 123, url: 'http://baidu.com'})
    }
}

module.exports = Logger 