const EventEmitter = require ('events');

// Create class
class MyEmitter extends EventEmitter{}

//Init Object
const myEmitter = new MyEmitter();

// Create event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event
myEmitter.emit('event');
