const api = require('./helpers/apiHelper');

describe('Todos API', () => {
  describe('GET /todos', () => {
    it('returns todos with the expected fields', async () => {
      const response = await api.get('/todos');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            userId: expect.any(Number),
            title: expect.any(String),
            completed: expect.any(Boolean),
          }),
        ]),
      );
    });
  });

  describe('POST /todos', () => {
    it('creates a todo and returns it with status 201', async () => {
      const newTodo = { title: 'New todo', completed: false, userId: 1 };
      const response = await api.post('/todos', newTodo);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newTodo));
      expect(response.body.id).toEqual(expect.any(Number));
    });
  });

  describe('PUT /todos', () => {
    it('replaces a todo and returns it with status 200', async () => {
      const updatedTodo = { title: 'Updated todo', completed: true, userId: 1 };
      const response = await api.put('/todos/1', updatedTodo);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(updatedTodo));
      expect(response.body.id).toBe(1);
    });
  });

  describe('PATCH /todos', () => {
    it('updates a todo title and returns it with status 200', async () => {
      const update = { title: 'Patched todo' };
      const response = await api.patch('/todos/1', update);

      expect(response.status).toBe(200);
      expect(response.body.title).toBe(update.title);
      expect(response.body.id).toBe(1);
    });
  });

  describe('DELETE /todos', () => {
    it('deletes a todo and returns status 200', async () => {
      const response = await api.delete('/todos/1');

      expect(response.status).toBe(200);
    });
  });
});
