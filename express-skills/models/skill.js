const skills = [
  {id: 111111, skill: 'Practice with Routes', done: true},
  {id: 222222, skill: 'Review Express', done: false},
  {id: 333333, skill: 'Preview next week Materials', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updateSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  skill.skill = updateSkill.skill;
  Object.assign(skill, updateSkill);
}


function deleteOne(id) {
  
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}