const api = require('./helpers/apiHelper');

describe('Comments API', () => {
  describe('GET /comments', () => {
    it('returns comments with the expected fields', async () => {
      const response = await api.get('/comments');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            postId: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            body: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('POST /comments', () => {
    it('creates a comment and returns it with status 201', async () => {
      const newComment = {
        postId: 1,
        name: 'Elise',
        email: 'elise@example.com',
        body: 'New comment',
      };
      const response = await api.post('/comments', newComment);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newComment));
      expect(response.body.id).toEqual(expect.any(Number));
    });
  });

  describe('PUT /comments', () => {
    it('replaces a comment and returns it with status 200', async () => {
      const updatedComment = {
        postId: 1,
        name: 'Elise',
        email: 'elise@example.com',
        body: 'Updated comment',
      };
      const response = await api.put('/comments/1', updatedComment);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(updatedComment));
      expect(response.body.id).toBe(1);
    });
  });

  describe('PATCH /comments', () => {
    it('updates a comment body and returns it with status 200', async () => {
      const update = { body: 'Patched comment' };
      const response = await api.patch('/comments/1', update);

      expect(response.status).toBe(200);
      expect(response.body.body).toBe(update.body);
      expect(response.body.id).toBe(1);
    });
  });

  describe('DELETE /comments', () => {
    it('deletes a comment and returns status 200', async () => {
      const response = await api.delete('/comments/1');

      expect(response.status).toBe(200);
    });
  });
});
