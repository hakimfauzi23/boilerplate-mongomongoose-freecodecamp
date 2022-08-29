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
    Person.findOne({favoriteFoods: food}, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId}, (err,data) => {
    if (err) return console.log(err);
    done(null , data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({_id:personId}, (err,data) => {
    if(err) return console.log(err);
    data.favoriteFoods.push(foodToAdd);
    data.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  });

};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name:personName},{age:ageToSet}, {new:true},(err,updatedData) => {
    if (err) return console.log(err);
    done(null ,updatedData);
  })
  
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId,(err,removedData) => {
    if(err) return console.log(err);
    done(null, removedData);
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  
  Person.remove({name:nameToRemove},(err,removedDatas)=> {
    if(err) return console.log(err);
    done(null, removedDatas);
  })
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
