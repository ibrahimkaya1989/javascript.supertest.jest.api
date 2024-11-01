// tests/api/users.test.js
const api = require('./helpers/apiHelper');

describe('Todos API', () => {

  describe('GET /todos', () => {
    it('should return a list of todos with status 200', async () => {
      const response = await api.get('/todos');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /todos', () => {
    it('should create a new todo and return it with status 201', async () => {
      const newData = { title: 'foo', completed: false, userId: 1 };
      const response = await api.post('/todos', newData);
      expect(response.status).toBe(201);
      expect(response.body.userId).toEqual(1);
      expect(response.body.title).toContain('foo');
      expect(response.body.completed).toBe(false);
    });
  });

  describe('PUT /todos', () => {
    it('should update a todo and return it with status 200', async () => {
      const newData = { title: 'foo', completed: false, userId: 1 };
      const response = await api.put('/todos/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.userId).toEqual(1);
      expect(response.body.title).toContain('foo');
      expect(response.body.completed).toBe(false);
    });
  });

  describe('PATCH /todos', () => {
    it('should patch a todo and return it with status 200', async () => {
      const newData = { title: 'foo1' };
      const response = await api.patch('/todos/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.title).toContain('foo1');
    });
  });

  describe('DELETE /todos', () => {
    it('should delete a todo and return it with status 200', async () => {
      const response = await api.delete('/todos/1');
      expect(response.status).toBe(200);
    });
  });

});
