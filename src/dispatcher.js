const EventEmitter = require('events').EventEmitter
const util = require('util')

function Dispatcher() {

}

util.inherits(Dispatcher, EventEmitter)

Dispatcher.prototype.dispatch = function(data) {
  console.log(data)
  this.emit(data._[0], data)
}


module.exports = Dispatcher