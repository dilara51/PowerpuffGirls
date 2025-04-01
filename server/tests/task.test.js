const Task = require("../models/Task");
const TaskStatus = require("../models/enums/TaskStatus");
const TaskPriority = require("../models/enums/TaskPriority");
const User = require("../models/User");

describe("Task Model", () => {
  // ✅ Test object creation
  it("should create task with valid data", () => {
    const task = new Task(
      1,
      "Write code",
      "short",
      "long description",
      new Date(),
      TaskPriority.MEDIUM
    );
    expect(task.title).toBe("Write code");
    expect(task.status).toBe(TaskStatus.OPEN);
  });

  // ✅ Test validation: invalid status
  it("should throw error for invalid status", () => {
    const task = new Task(2, "Bad status", "", "", new Date());
    expect(() => task.setStatus("NOT_REAL")).toThrow("Invalid task status!");
  });

  // ✅ Test status transitions
  it("should allow status change", () => {
    const task = new Task(3, "Change status", "", "", new Date());
    task.setStatus(TaskStatus.IN_REVIEW);
    expect(task.status).toBe(TaskStatus.IN_REVIEW);
  });

  // ✅ Test task assignment
  it("should assign task to a user and link it", () => {
    const user = new User(5, "assign@mail.com", "pw", "Ahmet", "Uslu");
    const task = new Task(6, "Assign me", "", "", new Date());

    task.assignTo(user);

    expect(task.assignee).toBe(user);
    expect(user.tasks).toContain(task);
  });

  // ✅ Test due date validation
  it("should detect overdue tasks", () => {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const task = new Task(7, "Late task", "", "", yesterday);

    expect(task.isOverdue()).toBe(true);
  });

  // ✅ Test priority management
  it("should set and keep correct priority", () => {
    const task = new Task(
      8,
      "High Priority",
      "",
      "",
      new Date(),
      TaskPriority.HIGH
    );
    expect(task.priority).toBe(TaskPriority.HIGH);
  });
});
