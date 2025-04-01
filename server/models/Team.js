class Team {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = new Date();

    this.members = []; // Beziehung zu User
    this.tasks = []; // Beziehung zu Task
  }

  addMember(user) {
    this.members.push(user);
    user.addTeam(this);
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

module.exports = Team;
