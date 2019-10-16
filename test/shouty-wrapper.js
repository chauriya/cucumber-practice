const Shouty = require('../lib/shouty')
let shouty;
module.exports = (function () {
    if(!shouty) {
        shouty = new Shouty()
    }
    return shouty
  })