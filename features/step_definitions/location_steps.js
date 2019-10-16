const { Given } = require('cucumber')
const Coordinate = require('../../lib/coordinate')

Given('{word} is at {int}, {int}', function (word, x, y) {
    this.shouty.setLocation(word, new Coordinate(x, y))
})

Given('People are located at', function (table) {
    table.hashes().forEach(row => {
        this.shouty.setLocation(row.name, new Coordinate(row.x, row.y))
    })
})
