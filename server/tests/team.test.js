const Team = require("../models/Team");
const User = require("../models/User");
const Task = require("../models/Task");

describe("Team Model", () => {
  // ✅ Test object creation
  it("should create a team with valid data", () => {
    const team = new Team(1, "QA Team", "Quality Assurance");
    expect(team.name).toBe("QA Team");
  });

  // ✅ Test relationship: add member
  it("should add user as member and update user too", () => {
    const user = new User(10, "test@a.com", "abc", "Test", "User");
    const team = new Team(2, "Test Team", "Team for testing");

    team.addMember(user);

    expect(team.members).toContain(user);
    expect(user.teams).toContain(team); // bidirectional
  });

  // ✅ Test relationship: add task
  it("should add a task to team", () => {
    const team = new Team(3, "DevOps", "Automation");
    const task = new Task(
      4,
      "Deploy",
      "CI/CD",
      "Deployment pipeline",
      new Date()
    );

    team.addTask(task);

    expect(team.tasks).toContain(task);
  });
});
