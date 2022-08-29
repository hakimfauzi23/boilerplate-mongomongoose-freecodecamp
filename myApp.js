require('dotenv').config();
let mongoose = require('mongoose');
let personSchema = new mongoose.Schema({
  name : { type: String, required: true },
  age : { type: Number, required: true },
  favoriteFoods : { type : Array , "default" : [] }
});
let Person = mongoose.model('Person',personSchema); 

const createAndSavePerson = (done) => {
  let person = new Person({name: "Hanif Fauzi", age:22,favoriteFoods: ["cheese","spaghetii", "burger"]});

  person.save((err,data) => {
    if(err) return console.log(err);
    done(null, data);
  })
};

let arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,(err,data) => {
    if(err) return console.log(err);
    done(null , data);
  });
};

let personName = "Robert";
const findPeopleByName = (personName, done) => {
  Person.find({name : personName}, (err,data) => {
    if(err) return console.log(err)
    done(null , data);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
