var DataObject = {};

var GeneratePerson = function() {
  let person = {
    likes: [],
    dislikes: []
  };
  //let rndInt = getRandomInt(0, DataObject.likeOptions.length);
  for (let _ = 0; _ < 8; _++) {
    person.likes.push(
      dataObject.likeOptions[getRandomInt(0, DataObject.likeOptions.length)]
    );
  }
  for (let _ = 0; _ < 8; _++) {
    person.dislikes.push(
      dataObject.likeOptions[getRandomInt(0, DataObject.likeOptions.length)]
    );
  }
  console.log(person);
};

DataObject.sentences = [
  "How was the math test?",
  "Everyone was busy, so I went to the movie alone.",
  "She did not cheat on the test, for it was not the right thing to do.",
  "Hurry!",
  "Tom got a small piece of pie",
  "If Purple People Eaters are real… where do they find purple people to eat?",
  "Wednesday is hump day, but has anyone asked the camel if he’s happy about it?",
  "Cats are good pets, for they are clean and are not noisy.",
  "The shooter says goodbye to his love.",
  "I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was."
];

DataObject.history = [
  "administered",
  "analyzed",
  "appointed",
  "approved",
  "assigned",
  "attained",
  "authorized",
  "chaired",
  "considered",
  "consolidated",
  "contracted",
  "controlled",
  "converted",
  "coordinated",
  "decided",
  "delegated",
  "developed",
  "directed",
  "eliminated",
  "emphasized",
  "enforced",
  "enhanced",
  "established",
  "executed",
  "generated"
];
DataObject.jobs = [
  "Baggage handler",
  "Bailiff",
  "Baker",
  "Bank clerk",
  "Bank manager",
  "Bar staff",
  "Barber",
  "Barrister",
  "Beauty therapist",
  "Blacksmith",
  "Boat builder",
  "Bodyguard"
];
DataObject.likeOptions = [
  "triacetyloleandomycin",
  "chorioepitheliomata",
  "overindividualization",
  "disestablishmentarianism",
  "magnetothermoelectricity",
  "antiutilitarianism",
  "polytetrafluoroethylene",
  "aerobacteriologically",
  "bioelectrogenetically",
  "phenylethylmalonylurea",
  "interdenominationalism",
  "cyclotrimethylenetrinitramine",
  "magnetohydrodynamically",
  "deoxyribonucleoprotein",
  "anatomicopathological",
  "antimaterialistically",
  "trinitrophenylmethylnitramine",
  "dicyclopentadienyliron",
  "poliencephalomyelitis",
  "overintellectualization",
  "electrophysiologically",
  "electrocardiographically"
];
module.exports = DataObject;
