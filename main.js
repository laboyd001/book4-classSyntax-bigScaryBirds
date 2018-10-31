// The learning objective for this practice exercise is to use the class syntax to establish a reusable definition (i.e. blueprint) of the properties and methods that objects will have in an application.

// Your job is to create a large, flightless bird class that defines the properties of a feathered terror. It should have the following properties:

// height
// flightless (should always be true)
// isExtinct
// name
// running speed
// toString -- This will be a method that outputs a description of the bird based on some of its properties. Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"
// Create at least 3 instances of the class. Visit the Wikipedia list of the largest birds in the world for inspiration.

// define the class of BigBird
class BigBird {

  constructor(props) {
    this.height = props.height
    this.flightless = true
    this.isExtinct = props.isExtinct
    this.name = props.name
    this.runningSpeed = props.runningSpeed
  }

// define the method...  what we want to happen in the end
sentence() {
  return `The ${this.name} is a big, scary bird that stands up to ${this.height}ft and can run up to ${this.runningSpeed}mph!`
}
}


// bird properties in objects(3)
const ostrichProps = {
  height: 9,
  flightless: true,
  isExtinct: false,
  name: "Ostrich",
  runningSpeed: 43
}

const emuProps = {
  height: 6,
  flightless: true,
  isExtinct: false,
  name: "Emu",
  runningSpeed: 30
}

const cassowaryProps = {
  height: 5,
  flightless: true,
  isExtinct: false,
  name: "Cassowary",
  runningSpeed: 2
}

// assigning the class to all the birds and console log the results
const ostrich = new BigBird(ostrichProps)
console.log(ostrich.sentence())

const emu = new BigBird(emuProps)
console.log(emu.sentence())

const cassowary = new BigBird(cassowaryProps)
console.log(cassowary.sentence())