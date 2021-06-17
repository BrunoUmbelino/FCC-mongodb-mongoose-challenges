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
    favoriteFoods: ["Cigarro", "marsupial dourado", "aço inoxidável"],
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
  Person.find({ name: personName }, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) console.log(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, (err, data) => {
    if (err) console.log(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return console.log(err);
    person.favoriteFoods.push(foodToAdd);

    person.save((err, response) => {
      if (err) return console.log(err);
      done(null, response);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, personUpdated) => {
      if (err) return console.log(err);
      done(null, personUpdated);
    }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, personRemoved) => {
    if (err) return console.log(err);
    done(null, personRemoved);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove }, (err, dataVoid) => {
    if (err) return console.log(err);
    console.log(dataVoid);
    done(null, dataVoid);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  let foodQuery = Person.find({ food: foodToSearch });
  foodQuery
    .sort()
    .select("-age")
    .exec((err, result) => {
      if (err) return console.log(err);
      done(null, result);
    });
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
