// SAME KEYS AND VALUES

// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }

const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

//  ===============================================================

// COMPUTED PROPERTY NAMES

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt",
// };

// instructor[favoriteNumber] = "That is my favorite!";

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

//  ===============================================================

//OBJECT METHODS

// var instructor = {
//   firstName: "Colt",
//   sayHi: function () {
//     return "Hi!";
//   },
//   sayBye: function () {
//     return this.firstName + " says bye!";
//   },
// };

const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

//  ===============================================================

// CREATE ANIMAL FUNCTION

// const d = createAnimal("dog", "bark", "Woooof!");
// // {species: "dog", bark: ƒ}
// d.bark(); //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// // {species: "sheep", bleet: ƒ}
// s.bleet(); //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
