const { register } = require("../controllers/userController");

describe("UserController", () => {
  test("gibt 400 zurück bei fehlender E-Mail", () => {
    const req = { body: { password: "123" } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    register(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("E-Mail fehlt");
  });
});
