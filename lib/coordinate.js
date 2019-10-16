class Coordinate {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distanceFrom(other) {
    // TODO: actually calculate distance between the coordinates.
    //return Math.abs(this.x - other.x);

    // HINT: square(Hypotenuse) = square(Perpendicular) + square(Base)
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) +
      Math.pow(this.y - other.y, 2)
    )

    //return 0
  }
}

module.exports = Coordinate
