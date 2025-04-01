const User = require("../models/User");
const Team = require("../models/Team");

describe("User Model", () => {
  // ✅ Test object creation
  it("should create a user with valid data", () => {
    const user = new User(1, "test@mail.com", "secret", "Ali", "Yılmaz");
    expect(user.email).toBe("test@mail.com");
    expect(user.createdAt).toBeInstanceOf(Date);
  });

  // ✅ Test relationship: add team
  it("should add team to user", () => {
    const user = new User(2, "teamuser@mail.com", "1234", "Mehmet", "Kaya");
    const team = new Team(1, "Dev Team", "Development group");

    user.addTeam(team);

    expect(user.teams).toContain(team);
  });

  // ✅ Test relationship: assign task
  it("should assign task to user", () => {
    const user = new User(3, "assignee@mail.com", "pass", "Ayşe", "Kara");
    const task = { title: "Dummy Task" }; // mock task object

    user.assignTask(task);

    expect(user.tasks).toContain(task);
  });
});
