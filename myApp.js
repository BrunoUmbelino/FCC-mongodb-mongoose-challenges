require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", PersonSchema);

const createAndSavePerson = (done) => {
  var juquinha = new Person({
    name: "Juquinha",
    age: 500,
    favoriteFoods: ["terra", "marsupial dourado", "aço inoxidável"],
  });

  juquinha.save((err, data) => {
    if (err) return console.log(err);
    done(null, data);
  });
};

const arrayOfPeople = [
  {
    name: "Sací Pererê",
    age: 300,
    favoriteFoods: ["terra", "marsupial dourado", "aço inoxidável"],
  },
  {
    name: "Mula Sem Cabeça",
    age: 500,
    favoriteFoods: ["terra", "marsupial dourado", "aço inoxidável"],
  },
  {
    name: "Caipora",
    age: 200,
    favoriteFoods: ["terra", "marsupial dourado", "aço inoxidável"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
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
