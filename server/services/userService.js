function register(user, userRepository) {
  if (!user.email || !user.password) {
    throw new Error("Ungültige Eingaben");
  }
  return userRepository.save(user);
}

module.exports = { register };
