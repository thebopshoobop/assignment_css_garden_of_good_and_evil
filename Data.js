function _randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var dataObject = {};

dataObject.generatePerson = function() {
  let person = {
    likes: [],
    dislikes: [],
    biography: [],
    resume: []
  };

  // Generate likes and dislikes
  for (let _ = 0; _ < 8; _++) {
    person.likes.push(
      dataObject.likeOptions[_randInt(0, dataObject.likeOptions.length)]
    );
  }
  for (let _ = 0; _ < 8; _++) {
    person.dislikes.push(
      dataObject.likeOptions[_randInt(0, dataObject.likeOptions.length)]
    );
  }

  // Generate Biography
  for (let _ = 0; _ < 3; _++) {
    person.biography.push(
      dataObject.sentences[_randInt(0, dataObject.sentences.length)]
    );
  }

  //Generate
  for (let _ = 0; _ < 5; _++) {
    let job = { title: '', body: [] };
    job.title = dataObject.jobs[_randInt(0, dataObject.jobs.length)];
    for (let _ = 0; _ < 4; _++) {
      job.body.push(dataObject.history[_randInt(0, dataObject.history.length)]);
    }
    job.body = job.body.join(', ');
    person.resume.push(job);
  }

  return person;
};

dataObject.sentences = [
  'How was the math test?',
  'Everyone was busy, so I went to the movie alone.',
  'She did not cheat on the test, for it was not the right thing to do.',
  'Hurry!',
  'Tom got a small piece of pie',
  'If Purple People Eaters are real… where do they find purple people to eat?',
  'Wednesday is hump day, but has anyone asked the camel if he’s happy about it?',
  'Cats are good pets, for they are clean and are not noisy.',
  'The shooter says goodbye to his love.',
  'I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.'
];

dataObject.history = [
  'administered',
  'analyzed',
  'appointed',
  'approved',
  'assigned',
  'attained',
  'authorized',
  'chaired',
  'considered',
  'consolidated',
  'contracted',
  'controlled',
  'converted',
  'coordinated',
  'decided',
  'delegated',
  'developed',
  'directed',
  'eliminated',
  'emphasized',
  'enforced',
  'enhanced',
  'established',
  'executed',
  'generated'
];
dataObject.jobs = [
  'Baggage handler',
  'Bailiff',
  'Baker',
  'Bank clerk',
  'Bank manager',
  'Bar staff',
  'Barber',
  'Barrister',
  'Beauty therapist',
  'Blacksmith',
  'Boat builder',
  'Bodyguard'
];
dataObject.likeOptions = [
  'triacetyloleandomycin',
  'chorioepitheliomata',
  'overindividualization',
  'disestablishmentarianism',
  'magnetothermoelectricity',
  'antiutilitarianism',
  'polytetrafluoroethylene',
  'aerobacteriologically',
  'bioelectrogenetically',
  'phenylethylmalonylurea',
  'interdenominationalism',
  'cyclotrimethylenetrinitramine',
  'magnetohydrodynamically',
  'deoxyribonucleoprotein',
  'anatomicopathological',
  'antimaterialistically',
  'trinitrophenylmethylnitramine',
  'dicyclopentadienyliron',
  'poliencephalomyelitis',
  'overintellectualization',
  'electrophysiologically',
  'electrocardiographically'
];

module.exports = dataObject;
