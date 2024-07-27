/* POJO: Plain Old JavaScript Object */

const key = "species";

const pet = {
  species: "Dog",
  name: "Bruno",
  age: 3.6,
};

/* Dot notation */
console.log("typeof pet: ", typeof pet);
console.log("pet", pet);
console.log("pet.species:", pet.species);
console.log("pet.name:", pet.name);
console.log("pet.age:", pet.age);
console.log("");

/* Square bracket notation */
console.log('pet["species"]:', pet["species"]);
console.log('pet["name"]:', pet["name"]);
console.log('pet["age"]:', pet["age"]);
console.log("");

/* square quote notation: variables */
console.log("key: ", key);
console.log("pet[key]:", pet[key]);

/* Dot notation does not support DOT notation */
/* Properties that don't exist ALWAYS evaluate to _undefined_ */
console.log("pet.key:", pet.key); //undefined
console.log('pet["nothingReallymatter"]:', pet["nothingReallymatter"]);
console.log("pet.nothingReallymatter:", pet.nothingReallymatter);


/* All key name should get "stringified": */
pet[1] = "hello";
pet["1"] = "Goodbye";
console.log('');

console.log('pet[1]: ', pet[1]);
pet[true] = "Bonjour"
console.log('pet["true"]:', pet["true"]);
console.log('');

/* You can add object and functions */
pet.friends = [];
console.log(pet);
console.log('');

pet.bark = function() {
    return "Woof Woof!!"
}

console.log('pet.bark(): ', pet.bark());