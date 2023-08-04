const skills = [
  {id: 111111, skill: 'Practice with Routes', done: true},
  {id: 222222, skill: 'Review Express', done: false},
  {id: 333333, skill: 'Preview next week Materials', done: false}
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id)
}

function getAll() {
  return skills;
}