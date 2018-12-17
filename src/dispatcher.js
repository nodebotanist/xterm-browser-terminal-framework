const EventEmitter = require('events').EventEmitter
const util = require('util')

function Dispatcher() {

}

util.inherits(Dispatcher, EventEmitter)


module.exports = Dispatcher