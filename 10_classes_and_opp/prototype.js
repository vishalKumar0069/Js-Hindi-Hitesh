// let myName = "Hitesh   "
// let myChannel = "Chai   "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all Objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says Hello`);
};

// heroPower.hitesh();
// myHeros.hitesh();
// myHeros.heyHitesh();

// heroPower.heyHitesh() --> This can't access Array


// Inheritance
const User = {
  userName: `Chai`,
  email: `chai@gmail.com`
}

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: ` JS Assignment`,
  fullTime: true,
  __proto__: TeachingSupport
};

Teacher.__proto__ = User  //this is old Approach--

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUser = "ChaiAurCode   "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`); 
}

anotherUser.trueLength()
"Hitesh".trueLength()
"IceTea".trueLength()
