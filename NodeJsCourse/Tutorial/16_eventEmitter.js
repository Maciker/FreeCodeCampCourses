const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data recieved user: ${name} id: ${id}`);
})

customEmitter.on('response', () => {
    console.log(`Some other logic`);
})

customEmitter.emit('response', 'Iker', 0)