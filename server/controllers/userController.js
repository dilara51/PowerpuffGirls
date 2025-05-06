function register(req, res) {
  const { email, password } = req.body;
  if (!email) return res.status(400).send("E-Mail fehlt");
  return res.status(201).json({ message: "Benutzer erstellt" });
}

module.exports = { register };
