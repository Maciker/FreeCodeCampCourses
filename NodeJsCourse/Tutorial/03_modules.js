const names = require('./04_names')
const sayHi = require('./05_utils')

const data = require('./06_alternative_exports')

sayHi(names.iker)
sayHi(names.unax)
sayHi('Erkuden')

console.log(data)

require('./07_mind_grenade')