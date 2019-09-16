// console.log(":::::::QUESTION 1 A ND B :::::::")
//
//
// class Person {
//   constructor(fName, mName, lName) {
//     this.fName = fName;
//     this.mName = mName;
//     this.lName = lName
//   }
//   laugh() {
//     console.log(this.fName + " is laughing")
//   }
//   meditate() {
//     console.log(this.fName + " is meditating")
//   }
//   fullName() {
//     console.log(this.fName + " " + this.mName + " " + this.lName)
//   }
// }
//
// let chinxy = new Person("Chinxy", "Thee", "Divine")
// let aset = new Person("Goddess", "Aset", "Khemet")
//
// console.log(chinxy.fName)
//
// chinxy.fullName()
// aset.fullName()



// console.log("QUESTION 2 A ND B")
//
// class Book {
//   constructor(title, author, rating) {
//     this.title = title;
//     this.author = author;
//     this.rating = rating
//   }
//   isGood() {
//     if(this.rating > 7) {
//       return true
//     }
//     return false
//   }
// }
//
// let book1 = new Book("The New Jim Crow", "Michelle Alexander", 7)
// let book2 = new Book("The Conscious Mind",  "Davis Chalmers", 6)
//
// console.log(book1)
// console.log(book2.isGood())








// console.log("QUESTION 3")
//
// class Dog {
//   constructor(name, breed, mood, hungry) {
//     this.name = name;
//     this.breed = breed;
//     this.mood = mood;
//     this.hungry = false || true
//   }
//   playFetch() {
//     set.current(this.mood)
//     }
//   }
// }
// let scoop = new Dog("Scoop", "Chihuahua", "Chill", false)
//
// console.log(scoop)
// console.log(scoop.playFetch())



console.log('QUESTION 4')

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 373
 }

class Celcius {
  constructor(celcius) {
    this.celcius = celcius
  }
  getFahrenheitTemp() {
    let fahr = 1.8 * this.celcius + 32
    return fahr
  }
  getKelvinTemp() {
    let kelv = this.celcius + 273
    return kelv
  }
  isBelowFreezing() {
    if (this.celcius < 0) {
      return true
    }
    return false
  }
}

let outsideTempt = new Celcius(10)

console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.celcius)
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.isBelowFreezing())


// console.log('QUESTION 5')
//
// class Movie {
//   constructor(name, year, genre, cast, description) {
//   this.name = name;
//   this.year = year;
//   this.genre = genre;
//   this.cast = cast;
//   this.description = description
// }
//   blurb() {
//     console.log(`${this.name} came out in ${this.year}. ${this.description}`)
//   }
// }
// let lionKing = new Movie("The Lion King", 2019, "Family",
// "Donald Glover, Beyonce, Seth Rogan, Billy Eichner, Chiwetel Ejiofor",
// "Danny Glover stars as Simba who is banished after his father's death, but takes back the throne from his evil Uncle.")
//
// console.log(lionKing)
// console.log(lionKing.blurb()); //This keeps giving me undefined after the output



//console.log('QUESTION 6')
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// function Vector(x, y) {
//   this.x = x;
//   this.y = y
// }
//
// Vector.prototype.plus = function(vect) {
//   const newX = this.x + vect.x
//   const newY = this.y + vect.y
//   return new Vector(newX, newY)
// }
//
// Vector.prototype.minus = function(vect) {
//   const newX = this.x - vect.x
//   const newY = this.y - vect.y
//   return new Vector(newX, newY)
// }
//
// Vector.prototype.getLength = function() {
//   return this.x + this.y
// }
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// var v3 = new Vector(3, 4)
//
// //console.log(v1.minus(v2));
//
// console.log(v3.getLength());

// console.log("QUESTION 7")
//
// class Car {
//   constructor(make, model, wheels) {
//     this. make = make;
//     this.model = model
//     this.wheels = wheels
//   }
//   static isCar(numOfWheels) {
//     return numOfWheels instanceof Car
//   }
// }
//
// class Bike {
//   constructor(gears, hasBell, wheels) {
//    this.gears = gears;
//    this.hasBell = true || false
//    this.wheels = wheels
//  }
//  static isBike(numberOfWheels) {
//    return numberOfWheels instanceof Bike
//  }
// }
//
// let car1 = new Car("Acura", "MDX", 4)
// let bike1 = new Bike("Fixed", false, 2)
//
//
// console.log(car1)
// console.log(bike1)
// console.log(Bike.isBike(car1))
// console.log(Car.isCar(car1))

//MOST BIKES WILL ALWAYS HAVE TWO WHEELS LIKE ALL CARS WILL HAVE 4. INSTANCES DO NO CHANGE




// console.log('QUESTION 8')
//
// class Vehicle {
//   constructor(color, name) {
//     this.color = color;
//     this.name = name
//   }
//   makeSound() {
//     console.log(`WHHOOSSSH`)
//   }
//   static isVehicle(value) {
//     return value instanceof Vehicle
//   }
// }
//
// class Car extends Vehicle {
//   constructor(color, name, make, model, wheels) {
//     super(color, name)
//     this.make = make;
//     this.model = model
//     this.wheels = wheels
//   }
//   static isCar(numOfWheels) {
//     return numOfWheels instanceof Car
//   }
// }
//
// class Bike extends Vehicle {
//   constructor(color, name, gears, hasBell, wheels) {
//    super(color, name)
//    this.gears = gears;
//    this.hasBell = true || false
//    this.wheels = wheels
//  }
//  static isBike(numberOfWheels) {
//    return numberOfWheels instanceof Bike
//  }
// }
//
// let car1 = new Car("Acura", "MDX", 4)
// let bike1 = new Bike("Fixed", false, 2)
// let bike2 = new Bike("Green", "Bikey McBikeface", "Fixed", true, 2)
// let car2 = new Car("Red", "Carry McCarface", "BMW", "Convertible", 4)
// // //checking if bike 1 and car 1 is instanceof vehicle
// // console.log(Bike.isVehicle(bike1))
// // console.log(Car.isVehicle(car1))
//
// //checking the properties of new car2 and bike2
// console.log(bike2)
// console.log(car2)
