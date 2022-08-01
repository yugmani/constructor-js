// Import stylesheets
import './style.css';

// CONSTRUCTOR FUNCTIONS
// ********************************************

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

//Adding properties and methods in an object
// ********************************************

function Student(name, grade) {
  (this.name = name), (this.grade = grade);
}

let student1 = new Student('Kamal', 6);
let student2 = new Student('Katherine', 7);

//Adding a property
student1.gender = 'male';
student2.gender = 'female';

console.log(student1); //{name: "Kamal", grade: 6, gender: "male"}
console.log(student2); //{name: "Katherine", grade: 7, gender: "female" }

//Adding a method
student1.greet = function () {
  console.log(`Hello ! I am ${this.name}`);
};

student1.greet(); //Hello ! I am Kamal
student2.greet(); //Error: student2.greet is not a function

