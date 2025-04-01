class User {
  constructor(id, email, password, firstName, lastName) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.createdAt = new Date();
    this.lastLogin = null;

    this.teams = []; // Beziehung zu Team
    this.tasks = []; // Beziehung zu Task
  }

  addTeam(team) {
    this.teams.push(team);
  }

  assignTask(task) {
    this.tasks.push(task);
  }
}

module.exports = User;
