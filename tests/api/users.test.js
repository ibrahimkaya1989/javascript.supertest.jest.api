const api = require('./helpers/apiHelper');

describe('Users API', () => {
  describe('GET /users', () => {
    it('returns users with the expected fields', async () => {
      const response = await api.get('/users');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            username: expect.any(String),
            email: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('POST /users', () => {
    it('creates a user and returns it with status 201', async () => {
      const newUser = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
      };
      const response = await api.post('/users', newUser);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newUser));
      expect(response.body.id).toEqual(expect.any(Number));
    });
  });

  describe('PUT /users', () => {
    it('replaces a user and returns it with status 200', async () => {
      const updatedUser = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
      };
      const response = await api.put('/users/1', updatedUser);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(updatedUser));
      expect(response.body.id).toBe(1);
    });
  });

  describe('PATCH /users', () => {
    it('updates a user name and returns it with status 200', async () => {
      const update = { name: 'Patched user' };
      const response = await api.patch('/users/1', update);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(update.name);
      expect(response.body.id).toBe(1);
    });
  });

  describe('DELETE /users', () => {
    it('deletes a user and returns status 200', async () => {
      const response = await api.delete('/users/1');

      expect(response.status).toBe(200);
    });
  });
});
