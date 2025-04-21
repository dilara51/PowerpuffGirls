const repo = require("../repositories/userRepo");

describe("UserRepo", () => {
  beforeEach(() => repo.reset());

  test("findet User per E-Mail", () => {
    repo.save({ email: "a@mail.com" });
    const found = repo.findByEmail("a@mail.com");
    expect(found.email).toBe("a@mail.com");
  });
});
