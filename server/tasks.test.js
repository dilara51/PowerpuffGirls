const request = require('supertest');
const app = require('./server'); 

describe('API /tasks', () => {
  it('gibt am Anfang eine leere Liste zurück', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('erstellt eine neue Aufgabe erfolgreich', async () => {
    const newTask = { title: 'Testaufgabe', description: 'automatisiert' };
    const res = await request(app).post('/tasks').send(newTask);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Testaufgabe');
    expect(res.body.completed).toBe(false);
  });

  it('gibt einen Fehler zurück, wenn der Titel fehlt', async () => {
    const res = await request(app).post('/tasks').send({ description: 'Fehlerfall' });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Title is required');
  });
});
