const EventEmitter = require('evemts');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg){
        // call event
        this.emit('message', 
        {id: uuid.v4(), msg});
    }
    }

module.exports = Logger
