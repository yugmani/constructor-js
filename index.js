// Import stylesheets
import './style.css';

//first constructor function
function Person() {
  (this.name = 'Ayako'), (this.age = 34);
}

//instance of an object
const person1 = new Person();
console.log(person1); //Person {name: "Ayako", age: 34}

console.log(person1.name); //Ayako
console.log(person1.age); //34

//Creating multiple Objects with Constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User('Ayako', 34);
const user2 = new User('Pako', 75);

console.log(user1); //User {name: "Ayako", age: 34}
console.log(user2); //User {name: "Pako", age: 75}

//Constructor with methods
function Animal(name, species, sound) {
  this.name = name;
  this.species = species;
  this.sound = sound;

  this.speak = function () {
    console.log(`${this.name} sounds ${this.sound}.`);
  };
}

const animal1 = new Animal('cow', 'Bos Taurus', 'moo');
console.log(animal1.speak()); //cow sounds moo.

//Object Literal method to create an object
let customer = {
  name: 'Sam',
  age: 23,
};

console.log(customer.name); //Sam
console.log(customer.age); //23;

