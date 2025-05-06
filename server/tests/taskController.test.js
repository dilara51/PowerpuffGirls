const { createTask } = require("../controllers/taskController");

describe("createTask", () => {
  const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn();
    res.json = jest.fn();
    return res;
  };

  test("gültiger Task gibt 201 zurück", () => {
    const req = {
      body: {
        title: "Testaufgabe",
        dueDate: new Date(Date.now() + 86400000).toISOString(), // morgen
        assignee: "user1",
      },
    };
    const res = mockRes();
    createTask(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Testaufgabe" })
    );
  });

  test("Titel fehlt", () => {
    const req = { body: { title: "", dueDate: new Date().toISOString() } };
    const res = mockRes();
    createTask(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("Titel ist erforderlich.");
  });
});
