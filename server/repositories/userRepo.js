let users = [];

function save(user) {
  users.push(user);
  return user;
}

function findByEmail(email) {
  return users.find((u) => u.email === email);
}

function reset() {
  users = [];
}

module.exports = { save, findByEmail, reset };
