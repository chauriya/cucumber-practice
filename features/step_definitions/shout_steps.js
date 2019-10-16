const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber')
//const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'
/* let shouty

Before(function () {
  shouty = new Shouty()
})

Given('{word} is at {int}, {int}', function (word, x, y) {
  shouty.setLocation(word, new Coordinate(x, y))
})

Given('People are located at', function (table) {
  table.hashes().forEach(row => {
    shouty.setLocation(row.name, new Coordinate(row.x, row.y))
  })
})

Given('Sean is at {int}, {int}', function (x, y) {
  shouty.setLocation('Sean', new Coordinate(x, y))
}) */

When('{word} shouts', function (name) {
  this.shouty.shout(name, ARBITARY_MESSAGE)
})

/* When('Oscar shouts', function () {
  shouty.shout('Oscar', ARBITARY_MESSAGE)
}) */

Then('{word} should hear {word}', function (listner, shouter) {
  const listenrCount = shouter === 'nothing' ? 0 : 1
  const listnerHeard = this.shouty.getShoutsHeardBy(listner)
  assert.equal(listnerHeard.size, listenrCount)
})


/* Then('{word} should not hear Sean', function (shouter) {
  assert.equal(shouty.getShoutsHeardBy(shouter).size, 0)
}) */

Then('{word} should not hear {word}', function (listner, shouter) {
  const listnerHeard = this.shouty.getShoutsHeardBy(listner)
  assert.equal(listnerHeard.get(shouter), undefined)
})