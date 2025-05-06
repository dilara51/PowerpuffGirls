function createTask(req, res) {
  const { title, dueDate, assignee, team } = req.body;

  if (!title) return res.status(400).send("Titel ist erforderlich.");
  if (title.length > 255) return res.status(400).send("Titel ist zu lang.");
  if (new Date(dueDate) < new Date())
    return res.status(400).send("Fälligkeitsdatum liegt in der Vergangenheit.");
  if (assignee && team)
    return res
      .status(400)
      .send("Bitte entweder Assignee oder Team auswählen, nicht beides.");

  return res.status(201).json({ title, dueDate, assignee, team });
}

module.exports = { createTask };
