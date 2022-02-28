const os = require('os')

const user = os.userInfo()

console.log(user);

console.log(`The system uptima is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS)