const { register } = require("../services/userService");

describe("UserService", () => {
  test("speichert Benutzer korrekt", () => {
    const mockRepo = {
      save: jest.fn().mockReturnValue({ email: "a@mail.com" }),
    };
    const user = { email: "a@mail.com", password: "Abc!123" };

    const result = register(user, mockRepo);

    expect(mockRepo.save).toHaveBeenCalledWith(user);
    expect(result).toEqual({ email: "a@mail.com" });
  });
});
