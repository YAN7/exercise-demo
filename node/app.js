const EventEmitter = require('events');
const Logger = require('./log')

const logger = new Logger()


// on: 添加事件监听到 messageLog事件
logger.on('messageLog', (arg) => {
    console.log(`the emitter called message has received ${JSON.stringify(arg)}`);
})

logger.log(123)


