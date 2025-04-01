const TaskPriority = require("./enums/TaskPriority");
const TaskStatus = require("./enums/TaskStatus");

class Task {
  constructor(
    id,
    title,
    shortDescription,
    longDescription,
    dueDate,
    priority = TaskPriority.MEDIUM
  ) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = TaskStatus.OPEN;

    this.assignee = null; // User
    this.team = null; // Team
  }

  assignTo(user) {
    this.assignee = user;
    user.assignTask(this);
  }

  setStatus(newStatus) {
    if (!Object.values(TaskStatus).includes(newStatus)) {
      throw new Error("Invalid task status!");
    }
    this.status = newStatus;
  }

  isOverdue() {
    return new Date() > this.dueDate && this.status !== TaskStatus.CLOSED;
  }
}

module.exports = Task;
